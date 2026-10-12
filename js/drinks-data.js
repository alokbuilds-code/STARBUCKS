/**
 * VERIFIED PRODUCT DATA FOR STARBUCKS SELECTION
 * Data grounded in authentic Starbucks beverage formulations, nutritional disclosures, and roast notes.
 * Note: Prices are marked as demonstration references.
 */

export const DRINKS_DATA = [
  {
    id: 'iced-brown-sugar-shaken-espresso',
    name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
    kicker: 'Blonde Craft Shaken',
    category: 'espresso',
    categoryLabel: 'Espresso Craft',
    image: 'assets/images/drink_iced_caramel.jpg',
    description: 'Starbucks® Blonde espresso, brown sugar and cinnamon shaken together with ice, then crowned with creamy oatmilk for an uplifting, texturized balance.',
    tastingNotes: ['Brown Sugar', 'Toasted Cinnamon', 'Creamy Oatmilk'],
    roast: 'Starbucks® Blonde Roast',
    roastLevel: 'Blonde (Light)',
    calories: '120 kcal',
    caffeine: '255 mg',
    price: 5.95,
    sizes: [
      { name: 'Short', oz: '8 oz', priceDelta: -0.80, cal: 80, caf: 170 },
      { name: 'Tall', oz: '12 oz', priceDelta: -0.40, cal: 90, caf: 170 },
      { name: 'Grande', oz: '16 oz', priceDelta: 0, cal: 120, caf: 255, default: true },
      { name: 'Venti', oz: '24 oz', priceDelta: 0.60, cal: 180, caf: 340 }
    ],
    defaultCustomization: {
      size: 'Grande',
      milk: 'Oatmilk',
      shots: 3,
      pumps: 4,
      ice: 'Normal'
    }
  },
  {
    id: 'nitro-cold-brew-sweet-cream',
    name: 'Nitro Cold Brew with Vanilla Sweet Cream',
    kicker: 'Nitrogen Tap Reserve',
    category: 'cold-brew',
    categoryLabel: 'Cold Craft',
    image: 'assets/images/sb_asset_113070.jpg',
    description: 'Steeped cold for twenty uninterrupted hours and infused with micro-nitrogen for a thick, velvety cascade, finished with a deliberate float of vanilla sweet cream.',
    tastingNotes: ['Velvet Crema', 'Sweet Malt', 'Dark Chocolate'],
    roast: 'Cold Brew Signature Blend',
    roastLevel: 'Medium-Dark',
    calories: '70 kcal',
    caffeine: '280 mg',
    price: 5.75,
    sizes: [
      { name: 'Tall', oz: '12 oz', priceDelta: -0.40, cal: 50, caf: 215 },
      { name: 'Grande', oz: '16 oz', priceDelta: 0, cal: 70, caf: 280, default: true }
    ],
    defaultCustomization: {
      size: 'Grande',
      milk: 'Vanilla Sweet Cream Float',
      shots: 0,
      pumps: 2,
      ice: 'Served without ice for velvety cascade'
    }
  },
  {
    id: 'pike-place-artisan-pairing',
    name: 'Pike Place® Roast & Autumn Bakery Tart',
    kicker: 'Brewed Blend & Pairing',
    category: 'brewed',
    categoryLabel: 'Brewed & Bakery',
    image: 'assets/images/sb_asset_112943.jpg',
    secondaryImage: 'assets/images/137-112942.jpg',
    description: 'A smooth, well-rounded Latin American brew with subtle notes of cocoa and toasted nuts, paired with artisan maple pecan crumble tart.',
    tastingNotes: ['Subtle Cocoa', 'Toasted Nuts', 'Warm Maple Pecan'],
    roast: 'Medium Roast',
    roastLevel: 'Balanced Medium',
    calories: '5 kcal (Coffee) / 340 kcal (Tart)',
    caffeine: '310 mg',
    price: 6.25,
    sizes: [
      { name: 'Tall', oz: '12 oz', priceDelta: -0.50, cal: 5, caf: 235 },
      { name: 'Grande', oz: '16 oz', priceDelta: 0, cal: 5, caf: 310, default: true },
      { name: 'Venti', oz: '20 oz', priceDelta: 0.50, cal: 5, caf: 410 }
    ],
    defaultCustomization: {
      size: 'Grande',
      milk: 'Splash of Whole Milk',
      shots: 0,
      pumps: 0,
      ice: 'Hot'
    }
  },
  {
    id: 'reserve-flat-white',
    name: 'Reserve® Microfoam Flat White',
    kicker: 'Ristretto Mastery',
    category: 'espresso',
    categoryLabel: 'Espresso Craft',
    image: 'assets/images/drink_iced_swirl.jpg',
    description: 'Expertly pulled ristretto shots deliver intense espresso sweetness, enrobed with whole steamed milk frothed into velvety microfoam and signed with a white dot.',
    tastingNotes: ['Bold Ristretto', 'Sweet Cream', 'Almond Nougat'],
    roast: 'Signature Espresso Roast',
    roastLevel: 'Dark Roast',
    calories: '170 kcal',
    caffeine: '195 mg',
    price: 5.45,
    sizes: [
      { name: 'Short', oz: '8 oz', priceDelta: -0.60, cal: 110, caf: 130 },
      { name: 'Tall', oz: '12 oz', priceDelta: -0.30, cal: 140, caf: 130 },
      { name: 'Grande', oz: '16 oz', priceDelta: 0, cal: 170, caf: 195, default: true },
      { name: 'Venti', oz: '20 oz', priceDelta: 0.50, cal: 220, caf: 260 }
    ],
    defaultCustomization: {
      size: 'Grande',
      milk: 'Whole Milk Microfoam',
      shots: 3,
      pumps: 0,
      ice: 'Hot'
    }
  },
  {
    id: 'pure-matcha-latte',
    name: 'Pure Japanese Matcha Tea Latte',
    kicker: 'Shade-Grown Botanical',
    category: 'tea',
    categoryLabel: 'Botanical Craft',
    image: 'assets/images/drink_matcha_iced.jpg',
    description: 'Finely microground, shade-grown Japanese green tea leaves blended with steamed milk and a hint of organic cane sugar, decorated with artisan latte leaf art.',
    tastingNotes: ['Earthy Umami', 'Fresh Meadow', 'Silky Microfoam'],
    roast: 'Tencha Shade-Grown Leaves',
    roastLevel: 'Ceremonial Grade Matcha',
    calories: '240 kcal',
    caffeine: '80 mg',
    price: 5.25,
    sizes: [
      { name: 'Tall', oz: '12 oz', priceDelta: -0.40, cal: 180, caf: 55 },
      { name: 'Grande', oz: '16 oz', priceDelta: 0, cal: 240, caf: 80, default: true },
      { name: 'Venti', oz: '20 oz', priceDelta: 0.60, cal: 320, caf: 110 }
    ],
    defaultCustomization: {
      size: 'Grande',
      milk: 'Oatmilk',
      shots: 0,
      pumps: 3,
      ice: 'Hot'
    }
  },
  {
    id: 'iced-pecan-crunch-chai',
    name: 'Iced Pecan Crunch Cream Chai',
    kicker: 'Autumn Harvest Reserve',
    category: 'seasonal',
    categoryLabel: 'Seasonal Craft',
    image: 'assets/images/sb_asset_112873.jpg',
    description: 'Black tea infused with cardamom, cinnamon and clove, shaken with ice, and crowned with a thick ribbon of brown sugar pecan cold foam and candied crunch.',
    tastingNotes: ['Spiced Black Tea', 'Toasted Pecan', 'Velvet Cold Foam'],
    roast: 'Black Tea Spiced Infusion',
    roastLevel: 'Harvest Botanical',
    calories: '290 kcal',
    caffeine: '95 mg',
    price: 6.15,
    sizes: [
      { name: 'Tall', oz: '12 oz', priceDelta: -0.45, cal: 210, caf: 70 },
      { name: 'Grande', oz: '16 oz', priceDelta: 0, cal: 290, caf: 95, default: true },
      { name: 'Venti', oz: '24 oz', priceDelta: 0.65, cal: 390, caf: 135 }
    ],
    defaultCustomization: {
      size: 'Grande',
      milk: 'Whole Milk & Pecan Cold Foam',
      shots: 0,
      pumps: 4,
      ice: 'Normal'
    }
  }
];
