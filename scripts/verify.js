const fs = require('fs');

const requiredFiles = [
  'index.html',
  'css/variables.css',
  'css/base.css',
  'css/components.css',
  'css/sections.css',
  'css/responsive.css',
  'js/main.js',
  'js/drinks-data.js',
  'js/stores-data.js',
  'js/customizer.js',
  'js/store-locator.js',
  'js/animations.js',
  'assets/icons/starbucks-siren.svg',
  'assets/images/sb_asset_113070.jpg',
  'assets/images/drink_iced_caramel.jpg',
  'assets/images/sb_asset_112943.jpg',
  'assets/images/drink_iced_swirl.jpg',
  'assets/images/drink_matcha_iced.jpg',
  'assets/images/craft_latte_pour.jpg',
  'assets/images/craft_cup_warm.jpg',
  'assets/images/sb_asset_112873.jpg',
  'assets/images/cafe_interior.jpg'
];

let allOk = true;
requiredFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const s = fs.statSync(f);
    console.log('✓ FOUND: ' + f + ' (' + s.size + ' bytes)');
  } else {
    console.error('✗ MISSING: ' + f);
    allOk = false;
  }
});

console.log('\nINTEGRITY STATUS: ' + (allOk ? 'ALL ASSETS & SOURCE FILES PRESENT' : 'FAILED'));
