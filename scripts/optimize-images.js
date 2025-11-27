import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './attached_assets/generated_images';
const outputDir = './attached_assets/optimized_images';

async function optimizeImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

  console.log(`Found ${files.length} PNG files to optimize`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.basename(file, '.png');
    
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    const pngPath = path.join(outputDir, `${baseName}.png`);
    
    try {
      await sharp(inputPath)
        .resize(1200, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(webpPath);
      
      await sharp(inputPath)
        .resize(1200, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(pngPath);
      
      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(webpPath).size;
      const pngSize = fs.statSync(pngPath).size;
      
      console.log(`${file}:`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(0)}KB`);
      console.log(`  WebP: ${(webpSize / 1024).toFixed(0)}KB (${((1 - webpSize/originalSize) * 100).toFixed(0)}% smaller)`);
      console.log(`  PNG: ${(pngSize / 1024).toFixed(0)}KB (${((1 - pngSize/originalSize) * 100).toFixed(0)}% smaller)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log('\nImage optimization complete!');
}

optimizeImages();
