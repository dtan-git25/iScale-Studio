import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeForMobile() {
  const optimizedDir = path.join(__dirname, '../attached_assets/optimized_images');
  
  // Create mobile-optimized logo (226x42 actual display size, no need for 2x)
  console.log('Creating mobile logo...');
  const logoStats = await sharp(path.join(optimizedDir, 'iScale_Studio_logo.webp'))
    .resize(226, 42, { fit: 'inside' })
    .webp({ quality: 85 })
    .toFile(path.join(optimizedDir, 'iScale_Studio_logo_mobile.webp'));
  console.log(`Mobile logo: ${logoStats.size} bytes`);
  
  // Create smaller hero background for mobile (640px width instead of 1920px)
  console.log('Creating mobile hero background...');
  const heroStats = await sharp(path.join(optimizedDir, 'abstract_ai_neural_network_background.webp'))
    .resize(640, null, { fit: 'inside' })
    .webp({ quality: 75 })
    .toFile(path.join(optimizedDir, 'abstract_ai_neural_network_background_mobile.webp'));
  console.log(`Mobile hero: ${heroStats.size} bytes`);
  
  console.log('Done!');
}

optimizeForMobile().catch(console.error);
