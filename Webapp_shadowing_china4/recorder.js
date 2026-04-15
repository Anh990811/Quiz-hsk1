/* ============================================
   RECORDER.JS – Hybrid Recording Module
   - Chế độ 'speech-api': Web Speech API (Chrome desktop/Android Chrome)
   - Chế độ 'media-recorder': MediaRecorder fallback (iOS Safari, Firefox, v.v.)
   - Chế độ 'none': Không hỗ trợ ghi âm
   ============================================ */

'use strict';

const RecorderUtil = {
  mode: null,   // 'speech-api' | 'media-recorder' | 'none'
  _mr: null,
  _stream: null,
  _chunks: [],
  _audioURL: null,
  _onStopCb: null,
  _timeslice: 200,   // ms per chunk

  /* ---- Detect best available mode ---- */
  detect() {
    if (this.mode) return this.mode;   // cached

    // Ưu tiên MediaRecorder trên mobile để tránh lỗi audio_capture từ Speech API
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    const hasSpeechAPI = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    const hasMedia = !!(
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === 'function' &&
      window.MediaRecorder
    );

    if (isIOS) {
      // iOS Safari: SpeechRecognition không có, dùng MediaRecorder
      this.mode = hasMedia ? 'media-recorder' : 'none';
    } else if (isAndroid) {
      // Android: Speech API hoạt động tốt trên Chrome; MediaRecorder là fallback
      this.mode = hasSpeechAPI ? 'speech-api' : (hasMedia ? 'media-recorder' : 'none');
    } else {
      // Desktop
      this.mode = hasSpeechAPI ? 'speech-api' : (hasMedia ? 'media-recorder' : 'none');
    }

    console.log('[RecorderUtil] UA =', navigator.userAgent.substring(0, 60));
    console.log('[RecorderUtil] mode =', this.mode, '| isIOS =', isIOS, '| isAndroid =', isAndroid);
    return this.mode;
  },

  /* ---- Best MIME type for this browser ---- */
  _pickMime() {
    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4',
      'audio/aac',
      '',   // browser default
    ];
    for (const m of candidates) {
      if (!m) return '';
      try {
        if (MediaRecorder.isTypeSupported(m)) return m;
      } catch (e) { /* ignore */ }
    }
    return '';
  },

  /* ---- MediaRecorder: start recording ---- */
  /* onStop(audioURL) – called when recording stops; audioURL=null on error */
  async startMediaRecord(onStop) {
    this._onStopCb = onStop;
    this._chunks = [];
    this._releaseStream();

    // ---- 1. Request microphone permission ----
    try {
      this._stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    } catch (e) {
      console.error('[RecorderUtil] getUserMedia error:', e.name, e.message);
      let msg = '⚠️ Không thể truy cập micro.';
      switch (e.name) {
        case 'NotAllowedError':
        case 'PermissionDeniedError':
          msg = '⚠️ Chưa cấp quyền micro. Vào Cài đặt → Trình duyệt/Safari → Micro → Cho phép.';
          break;
        case 'NotFoundError':
        case 'DevicesNotFoundError':
          msg = '⚠️ Không tìm thấy micro trên thiết bị.';
          break;
        case 'NotReadableError':
        case 'TrackStartError':
          msg = '⚠️ Micro đang được dùng bởi ứng dụng khác. Hãy đóng lại rồi thử.';
          break;
        case 'OverconstrainedError':
          msg = '⚠️ Cấu hình micro không tương thích.';
          break;
        case 'SecurityError':
          msg = '⚠️ Trình duyệt chặn micro (cần HTTPS hoặc localhost).';
          break;
        default:
          msg = '⚠️ Lỗi micro: ' + (e.message || e.name);
      }
      if (typeof showToast === 'function') showToast(msg, 6000);
      if (this._onStopCb) this._onStopCb(null);
      return false;
    }

    // ---- 2. Create MediaRecorder ----
    const mimeType = this._pickMime();
    console.log('[RecorderUtil] using mimeType =', mimeType || '(browser default)');

    try {
      this._mr = mimeType
        ? new MediaRecorder(this._stream, { mimeType })
        : new MediaRecorder(this._stream);
    } catch (e) {
      console.error('[RecorderUtil] MediaRecorder constructor error:', e);
      this._releaseStream();
      if (typeof showToast === 'function') showToast('⚠️ Không thể khởi tạo ghi âm: ' + e.message);
      if (this._onStopCb) this._onStopCb(null);
      return false;
    }

    // ---- 3. Wire up events ----
    this._mr.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        this._chunks.push(e.data);
      }
    };

    this._mr.onstop = () => {
      try {
        const actualMime = (this._mr && this._mr.mimeType) ? this._mr.mimeType : (mimeType || 'audio/webm');
        const blob = new Blob(this._chunks, { type: actualMime });
        if (this._audioURL) URL.revokeObjectURL(this._audioURL);
        this._audioURL = URL.createObjectURL(blob);
        console.log('[RecorderUtil] Recording done, blob size =', blob.size, 'type =', blob.type);
        this._releaseStream();
        if (this._onStopCb) this._onStopCb(this._audioURL);
      } catch (e) {
        console.error('[RecorderUtil] onstop error:', e);
        this._releaseStream();
        if (this._onStopCb) this._onStopCb(null);
      }
    };

    this._mr.onerror = (e) => {
      // e.error có thể là DOMException hoặc undefined tuỳ browser
      const errName = (e && e.error && e.error.name) ? e.error.name
        : (e && e.error) ? String(e.error)
          : 'unknown';
      console.error('[RecorderUtil] MediaRecorder onerror:', errName, e);

      let msg = '⚠️ Lỗi ghi âm: ' + errName;
      if (errName === 'SecurityError') {
        msg = '⚠️ Ghi âm bị chặn (cần HTTPS hoặc localhost).';
      } else if (errName === 'NotSupportedError') {
        msg = '⚠️ Định dạng âm thanh không được hỗ trợ trên thiết bị này.';
      }
      if (typeof showToast === 'function') showToast(msg, 5000);
      this._releaseStream();
      if (this._onStopCb) this._onStopCb(null);
    };

    // ---- 4. Start ----
    try {
      this._mr.start(this._timeslice);
      console.log('[RecorderUtil] MediaRecorder started, state =', this._mr.state);
      return true;
    } catch (e) {
      console.error('[RecorderUtil] start() error:', e);
      this._releaseStream();
      if (typeof showToast === 'function') showToast('⚠️ Không khởi động được ghi âm: ' + e.message);
      if (this._onStopCb) this._onStopCb(null);
      return false;
    }
  },

  /* ---- MediaRecorder: stop recording ---- */
  stopMediaRecord() {
    if (this._mr && this._mr.state !== 'inactive') {
      try {
        this._mr.stop();
      } catch (e) {
        console.warn('[RecorderUtil] stopMediaRecord error:', e.message);
        this._releaseStream();
        if (this._onStopCb) this._onStopCb(null);
      }
    }
  },

  /* ---- Release microphone track ---- */
  _releaseStream() {
    if (this._stream) {
      try {
        this._stream.getTracks().forEach(t => t.stop());
      } catch (e) { /* ignore */ }
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
    this._mr = null;
    this._chunks = [];
  },

  /* ---- Force re-detect (dùng khi cần reset cache) ---- */
  reset() {
    this.cleanup();
    this.mode = null;
  }
};
