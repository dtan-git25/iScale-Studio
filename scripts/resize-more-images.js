import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function resizeImages() {
  const optimizedDir = path.join(__dirname, '../attached_assets/optimized_images');
  
  // More service images to resize
  const serviceImages = [
    'futuristic_web_development_concept.webp',
    'workflow_automation_concept.webp',
    'ai_agent_assistant_interface.webp'
  ];
  
  for (const img of serviceImages) {
    const inputPath = path.join(optimizedDir, img);
    if (fs.existsSync(inputPath)) {
      const outputName = img.replace('.webp', '_small.webp');
      console.log(`Resizing ${img}...`);
      const stats = await sharp(inputPath)
        .resize(600, 327, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(path.join(optimizedDir, outputName));
      console.log(`  Output: ${stats.size} bytes`);
    } else {
      console.log(`File not found: ${img}`);
    }
  }
  
  console.log('Done!');
}

resizeImages().catch(console.error);
