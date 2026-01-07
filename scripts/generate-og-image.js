import { createCanvas, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';

const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Light background
ctx.fillStyle = '#f8f8f8';
ctx.fillRect(0, 0, width, height);

// Add a subtle red accent bar
ctx.fillStyle = '#9b1312';
ctx.fillRect(0, height - 8, width, 8);

// Draw text: "randy yeip"
ctx.font = 'italic 120px "Miller Display", serif';
ctx.fillStyle = '#0a0a0a';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('randy yeip', width / 2, height / 2 - 40);

// Save to file
const filepath = path.resolve('./public/images/og-preview.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(filepath, buffer);
console.log(`✓ OG preview image created: ${filepath}`);
