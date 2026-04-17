export interface ProductSpecification {
  id: string
  category: string
  name: string
  description: string
  basePrice: number
  image: string
  specs: {
    dimension?: string
    sizes?: string[]
    colors?: string[]
    finishes?: string[]
    minQuantity: number
    maxQuantity: number
  }
}

export const products: ProductSpecification[] = [
  {
    id: 'business-cards',
    category: 'business-cards',
    name: 'Business Cards',
    description: 'Standard 3.5" x 2" professional business cards',
    basePrice: 49.99,
    image: '/products/business-cards.jpeg',
    specs: {
      dimension: '3.5" x 2"',
      sizes: ['250 cards', '500 cards', '1000 cards', '2500 cards', '5000 cards'],
      colors: ['Full Color', 'Black & White', 'Spot Color'],
      finishes: ['Matte', 'Gloss', 'Linen'],
      minQuantity: 250,
      maxQuantity: 10000,
    },
  },
  {
    id: 'flyers',
    category: 'flyers',
    name: 'Flyers',
    description: 'Eye-catching promotional flyers in multiple sizes',
    basePrice: 89.99,
    image: '/products/flyers.jpeg',
    specs: {
      sizes: ['5.5" x 8.5"', '8.5" x 11"', '11" x 17"'],
      colors: ['Full Color (CMYK)'],
      finishes: ['Matte', 'Gloss', 'Satin'],
      minQuantity: 100,
      maxQuantity: 50000,
    },
  },
  {
    id: 'posters',
    category: 'posters',
    name: 'Posters',
    description: 'Large format posters perfect for displays and announcements',
    basePrice: 129.99,
    image: '/products/folders.jpeg',
    specs: {
      sizes: ['8.5" x 11"', '11" x 17"', '24" x 36"'],
      colors: ['Full Color'],
      finishes: ['Matte', 'Gloss', 'Satin'],
      minQuantity: 5,
      maxQuantity: 1000,
    },
  },
  {
    id: 'folders',
    category: 'folders',
    name: 'Folders',
    description: 'Custom branded document folders for professional presentations',
    basePrice: 199.99,
    image: '/products/folders.jpeg',
    specs: {
      sizes: ['4" x 9"', '9" x 12"'],
      colors: ['Full Color'],
      finishes: ['Matte', 'Gloss'],
      minQuantity: 100,
      maxQuantity: 5000,
    },
  },
  {
    id: 'letterhead',
    category: 'letterhead',
    name: 'Letterhead',
    description: 'Professional A4 and A5 letterhead for correspondence',
    basePrice: 79.99,
    image: '/products/business-cards.jpeg',
    specs: {
      sizes: ['A4 (8.27" x 11.69")', 'A5 (5.8" x 8.3")'],
      colors: ['Full Color', 'Black & White'],
      finishes: ['Matte', 'Gloss'],
      minQuantity: 250,
      maxQuantity: 10000,
    },
  },
  {
    id: 'envelopes',
    category: 'envelopes',
    name: 'Envelopes',
    description: 'Custom branded business envelopes',
    basePrice: 99.99,
    image: '/products/brochures.jpeg',
    specs: {
      sizes: ['#10 (4.125" x 9.5")', 'C5 (5.1" x 7.2")'],
      colors: ['Full Color', 'Black & White'],
      finishes: ['Matte'],
      minQuantity: 250,
      maxQuantity: 10000,
    },
  },
  {
    id: 'notepads',
    category: 'notepads',
    name: 'Notepads',
    description: 'Custom branded notepads with adhesive binding',
    basePrice: 59.99,
    image: '/products/notepads.jpeg',
    specs: {
      sizes: ['3.5" x 5"', '4" x 6"'],
      colors: ['Full Color'],
      finishes: ['Matte'],
      minQuantity: 50,
      maxQuantity: 5000,
    },
  },
  {
    id: 'brochures',
    category: 'brochures',
    name: 'Brochures',
    description: 'Tri-fold and bi-fold brochures for marketing',
    basePrice: 149.99,
    image: '/products/brochures.jpeg',
    specs: {
      sizes: ['Tri-fold (8.5" x 11")', 'Bi-fold (5.5" x 8.5")'],
      colors: ['Full Color'],
      finishes: ['Matte', 'Gloss'],
      minQuantity: 100,
      maxQuantity: 25000,
    },
  },
  {
    id: 'booklets',
    category: 'booklets',
    name: 'Booklets',
    description: 'Saddle-stitched booklets for catalogs and reports',
    basePrice: 199.99,
    image: '/products/brochures.jpeg',
    specs: {
      sizes: ['5.5" x 8.5"', '8.5" x 11"'],
      colors: ['Full Color'],
      finishes: ['Matte', 'Gloss'],
      minQuantity: 50,
      maxQuantity: 10000,
    },
  },
  {
    id: 'promo-pads',
    category: 'promo-pads',
    name: 'Promotional Pads',
    description: 'Custom adhesive notepads for giveaways',
    basePrice: 49.99,
    image: '/products/notepads.jpeg',
    specs: {
      sizes: ['3" x 3"', '4" x 6"'],
      colors: ['Full Color'],
      finishes: ['Matte'],
      minQuantity: 100,
      maxQuantity: 10000,
    },
  },
  {
    id: 'ncr-forms',
    category: 'ncr-forms',
    name: 'NCR Forms',
    description: 'Multi-part carbonless forms for invoices and receipts',
    basePrice: 179.99,
    image: '/products/business-cards.jpeg',
    specs: {
      sizes: ['8.5" x 11"', '5.5" x 8.5"'],
      colors: ['Black & White'],
      finishes: ['Standard'],
      minQuantity: 100,
      maxQuantity: 10000,
    },
  },
  {
    id: 'paper-bags',
    category: 'paper-bags',
    name: 'Paper Bags',
    description: 'Custom kraft and branded paper bags',
    basePrice: 139.99,
    image: '/products/folders.jpeg',
    specs: {
      sizes: ['5" x 3.5" x 8"', '6" x 4" x 10"', '8" x 5" x 12"'],
      colors: ['Full Color', 'Single Color'],
      finishes: ['Kraft', 'Glossy'],
      minQuantity: 250,
      maxQuantity: 10000,
    },
  },
]

export function getProductBySlug(slug: string): ProductSpecification | undefined {
  return products.find((p) => p.id === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.id)
}
