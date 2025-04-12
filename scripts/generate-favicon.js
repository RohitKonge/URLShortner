const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

console.log('Generating favicon files from SVG...');
console.log('Note: Make sure you have installed sharp with: npm install sharp');

// Ensure directories exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Read the SVG file
try {
  const svgPath = path.join(publicDir, 'favicon.svg');
  if (!fs.existsSync(svgPath)) {
    console.error('Error: favicon.svg not found in public directory!');
    process.exit(1);
  }
  
  const svgBuffer = fs.readFileSync(svgPath);
  
  // Generate favicon images in different sizes
  Promise.all([
    sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png')),
    sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png')),
    sharp(svgBuffer).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png')),
    sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'))
  ])
  .then(() => {
    console.log('✅ Successfully generated favicon PNG files');
    console.log('Files created:');
    console.log('  - public/favicon-16x16.png');
    console.log('  - public/favicon-32x32.png');
    console.log('  - public/favicon-48x48.png');
    console.log('  - public/apple-touch-icon.png');
    console.log('\nTo use these files, update app/layout.tsx with:');
    console.log(`
import { Metadata } from 'next';

export const metadata: Metadata = {
  // ... other metadata
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
`);
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
  });
} catch (error) {
  console.error('Error:', error.message);
} 