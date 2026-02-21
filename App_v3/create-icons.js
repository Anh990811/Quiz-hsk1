// Script tạo icon PWA cho app 学中文
// Chạy: node create-icons.js

const fs = require('fs');
const path = require('path');

// Tạo thư mục icons nếu chưa có
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir);

// SVG icon template
function createSVG(size) {
    const fontSize = Math.round(size * 0.45);
    const padding = Math.round(size * 0.1);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
    </linearGradient>
  </defs>
  <!-- Background rounded rect -->
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="url(#bg)"/>
  <!-- Subtle inner glow -->
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="url(#glow)"/>
  <!-- Decorative circle -->
  <circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.38}" fill="rgba(255,255,255,0.06)"/>
  <!-- Small dots decoration -->
  <circle cx="${Math.round(size * 0.2)}" cy="${Math.round(size * 0.2)}" r="${Math.round(size * 0.03)}" fill="rgba(255,255,255,0.3)"/>
  <circle cx="${Math.round(size * 0.8)}" cy="${Math.round(size * 0.2)}" r="${Math.round(size * 0.02)}" fill="rgba(255,255,255,0.2)"/>
  <circle cx="${Math.round(size * 0.15)}" cy="${Math.round(size * 0.75)}" r="${Math.round(size * 0.02)}" fill="rgba(255,255,255,0.2)"/>
  <!-- Chinese character 汉 -->
  <text x="${size / 2}" y="${size / 2 + fontSize * 0.35}" 
        font-family="'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif" 
        font-size="${fontSize}" 
        font-weight="700"
        fill="white" 
        text-anchor="middle"
        dominant-baseline="middle">汉</text>
  <!-- Small subtitle -->
  <text x="${size / 2}" y="${size * 0.82}" 
        font-family="'Inter','Arial',sans-serif" 
        font-size="${Math.round(size * 0.09)}" 
        font-weight="500"
        fill="rgba(255,255,255,0.75)" 
        text-anchor="middle">学中文</text>
</svg>`;
}

// Lưu file SVG (dùng làm icon fallback)
fs.writeFileSync(path.join(iconsDir, 'icon.svg'), createSVG(512));
console.log('✅ Created icons/icon.svg');

// Tạo HTML để convert SVG -> PNG bằng browser
const htmlConverter = `<!DOCTYPE html>
<html>
<head><title>Icon Generator</title></head>
<body>
<canvas id="c192" width="192" height="192"></canvas>
<canvas id="c512" width="512" height="512"></canvas>
<script>
async function svgToCanvas(svgString, canvas) {
  return new Promise((resolve) => {
    const img = new Image();
    const blob = new Blob([svgString], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve();
    };
    img.src = url;
  });
}

const svg192 = \`${createSVG(192)}\`;
const svg512 = \`${createSVG(512)}\`;

(async () => {
  await svgToCanvas(svg192, document.getElementById('c192'));
  await svgToCanvas(svg512, document.getElementById('c512'));
  
  // Download 192
  const a1 = document.createElement('a');
  a1.href = document.getElementById('c192').toDataURL('image/png');
  a1.download = 'icon-192.png';
  a1.click();
  
  await new Promise(r => setTimeout(r, 500));
  
  // Download 512  
  const a2 = document.createElement('a');
  a2.href = document.getElementById('c512').toDataURL('image/png');
  a2.download = 'icon-512.png';
  a2.click();
  
  document.body.innerHTML += '<p style="font-family:sans-serif;padding:20px;color:green">✅ Icons đã được tải xuống! Đặt vào thư mục <strong>App_v2/icons/</strong></p>';
})();
</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'generate-icons.html'), htmlConverter);
console.log('✅ Created generate-icons.html');
console.log('');
console.log('📋 Hướng dẫn tạo icon PNG:');
console.log('   Mở file generate-icons.html bằng Chrome/Edge');
console.log('   Hai file icon-192.png và icon-512.png sẽ tự động tải về');
console.log('   Đặt cả hai file vào thư mục App_v2/icons/');
