import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function resizeImages() {
  const optimizedDir = path.join(__dirname, '../attached_assets/optimized_images');
  
  // Resize logo to 2x display size (432x80 for retina, displayed at 216x40)
  console.log('Resizing logo...');
  const logoStats = await sharp(path.join(optimizedDir, 'iScale_Studio_logo.webp'))
    .resize(432, 80, { fit: 'inside' })
    .webp({ quality: 85 })
    .toFile(path.join(optimizedDir, 'iScale_Studio_logo_optimized.webp'));
  console.log(`Logo resized: ${logoStats.size} bytes`);
  
  // Resize service images
  const serviceImages = [
    'workflow_automation_process_diagram.webp',
    'ai_mobile_app_development_interface.webp', 
    'ai_web_development_modern_interface.webp',
    'e-commerce_platform_interface.webp',
    'ai_agent_concept.webp',
    'machine_learning_model_development_dashboard.webp'
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
    }
  }
  
  console.log('Done!');
}

resizeImages().catch(console.error);
