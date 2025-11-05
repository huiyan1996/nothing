const canvas = require('canvas');
const fs = require('fs');

function createIcon(size, bgColor = '#FF6B6B') {
  const c = canvas.createCanvas(size, size);
  const ctx = c.getContext('2d');
  
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);
  
  ctx.font = `${Math.floor(size * 0.6)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🐶', size / 2, size / 2);
  
  return c.toBuffer('image/png');
}

fs.writeFileSync('icon-192.png', createIcon(192));
fs.writeFileSync('icon-512.png', createIcon(512));
fs.writeFileSync('icon-192-maskable.png', createIcon(192, '#FFFFFF'));
fs.writeFileSync('apple-touch-icon.png', createIcon(180));

console.log('Icons generated successfully');
