/* ============================================
   RECORDER.JS – Hybrid Recording Module
   - Chế độ 'speech-api': Web Speech API (Chrome desktop/Android)
   - Chế độ 'media-recorder': MediaRecorder fallback (iOS Safari, Firefox…)
   - Chế độ 'none': Không hỗ trợ
   ============================================ */

'use strict';

const RecorderUtil = {
  mode: null,   // 'speech-api' | 'media-recorder' | 'none'
  _mr: null,
  _stream: null,
  _chunks: [],
  _audioURL: null,
  _onStopCb: null,

  /* ---- Detect best available mode ---- */
  detect() {
    if (this.mode) return this.mode;   // cached

    const hasSpeechAPI = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    const hasMedia     = !!(
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === 'function' &&
      window.MediaRecorder
    );

    if (hasSpeechAPI) {
      this.mode = 'speech-api';
    } else if (hasMedia) {
      this.mode = 'media-recorder';
    } else {
      this.mode = 'none';
    }
    console.log('[RecorderUtil] mode =', this.mode);
    return this.mode;
  },

  /* ---- MediaRecorder: start recording ---- */
  /* onStop(audioURL) called when recording stops */
  async startMediaRecord(onStop) {
    this._onStopCb = onStop;
    this._chunks   = [];
    this._releaseStream();

    // Request microphone
    try {
      this._stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) {
      let msg = '⚠️ Không thể truy cập micro.';
      if (e.name === 'NotAllowedError' || e.name === 'PermissionDeniedError') {
        msg = '⚠️ Chưa cấp quyền micro. Vào Cài đặt → Quyền riêng tư → Micro để cho phép.';
      } else if (e.name === 'NotFoundError') {
        msg = '⚠️ Không tìm thấy micro trên thiết bị.';
      }
      if (typeof showToast === 'function') showToast(msg, 5000);
      return false;
    }

    // Choose best MIME type
    const mimeType = ['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus', 'audio/mp4']
      .find(m => MediaRecorder.isTypeSupported(m)) || '';

    try {
      this._mr = mimeType
        ? new MediaRecorder(this._stream, { mimeType })
        : new MediaRecorder(this._stream);

      this._mr.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) this._chunks.push(e.data);
      };

      this._mr.onstop = () => {
        const blob = new Blob(this._chunks, { type: this._mr.mimeType || 'audio/webm' });
        if (this._audioURL) URL.revokeObjectURL(this._audioURL);
        this._audioURL = URL.createObjectURL(blob);
        this._releaseStream();
        if (this._onStopCb) this._onStopCb(this._audioURL);
      };

      this._mr.onerror = (e) => {
        if (typeof showToast === 'function') showToast('⚠️ Lỗi ghi âm: ' + e.error.name);
        this._releaseStream();
        if (this._onStopCb) this._onStopCb(null);
      };

      this._mr.start(100);   // Collect in 100ms chunks
      return true;
    } catch (e) {
      this._releaseStream();
      if (typeof showToast === 'function') showToast('⚠️ Không khởi động được ghi âm: ' + e.message);
      return false;
    }
  },

  /* ---- MediaRecorder: stop recording ---- */
  stopMediaRecord() {
    if (this._mr && this._mr.state !== 'inactive') {
      this._mr.stop();
    }
  },

  /* ---- Release microphone track ---- */
  _releaseStream() {
    if (this._stream) {
      this._stream.getTracks().forEach(t => t.stop());
      this._stream = null;
    }
  },

  /* ---- Full cleanup ---- */
  cleanup() {
    this.stopMediaRecord();
    this._releaseStream();
    if (this._audioURL) {
      URL.revokeObjectURL(this._audioURL);
      this._audioURL = null;
    }
  }
};
