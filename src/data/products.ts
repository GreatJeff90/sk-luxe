export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  price: number;
  originalPrice?: number; // Add this optional field
  sizes: string[];
  colors?: string[];
}

export const products: Product[] =[
  // --- Category: Tracksuits (100+) ---
  { 
    id: 101, 
    name: "SK Retro Tracksuit", 
    category: "Tracksuits", 
    image: "/product.png", 
    images: ["/product1.jpeg", "/new-products/tracksuit5.jpeg", "/model3.jpeg"],
    description: "Our tracksuits feature premium, breathable fabrics and precise tailoring to ensure comfort without compromising on a sharp, modern silhouette.",
    price: 45000, 
    originalPrice: 60000,
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Black"] 
  },
  { 
    id: 102, 
    name: "SK Retro Tracksuit (Set)", 
    category: "Tracksuits", 
    image: "/product2.png", 
    images: ["/product4.jpeg", "/new-products/tracksuit2.jpeg", "/product21.jpeg"],
    description: "Our tracksuits feature premium, breathable fabrics and precise tailoring to ensure comfort without compromising on a sharp, modern silhouette.",
    price: 45000, 
    originalPrice: 60000, // Add this
    sizes: ["XL", "2XL", "3XL"],
    colors: ["White"] 
},
{ 
    id: 103, 
    name: "SK Retro Tracksuit (Mono)", 
    category: "Tracksuits", 
    image: "/product (10).png", 
    images: ["/new-products/tracksuit6.jpeg", "/new-products/tracksuit3.jpeg", "/new-products/tracksuit4.jpeg"],
    description: "Our tracksuits feature premium, breathable fabrics and precise tailoring to ensure comfort without compromising on a sharp, modern silhouette.",
    price: 35000, 
    originalPrice: 50000, // Add this
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Black & White"] 
},
  { 
    id: 104, 
    name: "SK Retro Tracksuit (Variant)", 
    category: "Tracksuits", 
    image: "/product (1).png", 
    images: ["/product14.jpeg", "/product15.jpeg", "/product (1).png"],
    description: "Our tracksuits feature premium, breathable fabrics and precise tailoring to ensure comfort without compromising on a sharp, modern silhouette.",
    price: 45000, 
    originalPrice: 60000,
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Red",] 
  },
  { 
    id: 105, 
    name: "SK Motion Tracksuit (Variant)", 
    category: "Tracksuits", 
    image: "/product (3).png", 
    images: ["/product20.jpeg", "/product (3).png", "/product (3).png"],
    description: "Our tracksuits feature premium, breathable fabrics and precise tailoring to ensure comfort without compromising on a sharp, modern silhouette.",
    price: 35000, 
    originalPrice: 50000,
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Blue & Red with White Pants"] 
  },

  // --- Category: Tees (200+) ---
  { 
    id: 201, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/product (5).png", 
    images: ["/product (6).png", "/product5.jpeg", "/product5.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Black", "White",] 
  },
  { 
    id: 202, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/new-products/tee8.jpeg", 
    images: ["/model2.jpeg", "/new-products/tee8.jpeg", "/model1.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["White"] 
  },
  { 
    id: 203, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/new-products/tee9.jpeg", 
    images: ["/new-products/tee9.jpeg", "/new-products/tee7.jpeg", "/new-products/tee6.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["White",] 
  },
  { 
    id: 204, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/new-products/tee1.jpeg", 
    images: ["/new-products/tee1.jpeg", "/new-products/tee1.jpeg", "/new-products/tee1.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Midnight Blue"] 
  },
  { 
    id: 205, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/new-products/tee2.jpeg", 
    images: ["/new-products/tee2.jpeg", "/new-products/tee2.jpeg", "/new-products/tee2.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Dark Navy"] 
  },
  { 
    id: 206, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/new-products/tee3.jpeg", 
    images: ["/new-products/tee3.jpeg", "/new-products/tee3.jpeg", "/new-products/tee3.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["White"] 
  },
  { 
    id: 207, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/new-products/tee4.jpeg", 
    images: ["/new-products/tee4.jpeg", "/new-products/tee4.jpeg", "/new-products/tee4.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Purple"] 
  },
  { 
    id: 208, 
    name: "SK Nature Tee", 
    category: "Tees", 
    image: "/new-products/tee5.jpeg", 
    images: ["/new-products/tee5.jpeg", "/new-products/tee5.jpeg", "/new-products/tee5.jpeg"],
    description: "Crafted from ultra-soft, high-density cotton, these tees offer a sophisticated drape and minimalist aesthetic designed to elevate your everyday ensemble.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["White"] 
  },

  // --- Category: Trousers (300+) ---
  { 
    id: 301, 
    name: "SK Everyday SweatPants", 
    category: "Trousers", 
    image: "/product (11).png", 
    images: ["/product (12).png", "/product (13).png",  "/product (14).png"],
    description: "Whether you are navigating the city or seeking an elevated casual look, our trousers provide a structured fit that moves with you, designed for versatility and timeless style.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Black", "Grey"] 
  },
  { 
    id: 302, 
    name: "SK Everyday SweatPants", 
    category: "Trousers", 
    image: "/product (16).png", 
    images: ["/product (15).png", "/product (17).png", "/product (11).png"],
    description: "Whether you are navigating the city or seeking an elevated casual look, our trousers provide a structured fit that moves with you, designed for versatility and timeless style.",
    price: 25000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Black", "Navy"] 
  },
  // { 
  //   id: 303, 
  //   name: "SK Everyday SweatPants", 
  //   category: "Trousers", 
  //   image: "/product23.jpeg", 
  //   images: ["/product23a.png", "/product23a.png", "/product23a.png"],
  //   description: "Whether you are navigating the city or seeking an elevated casual look, our trousers provide a structured fit that moves with you, designed for versatility and timeless style.",
  //   price: 25000, 
  //   sizes: ["XL", "2XL", "3XL"],
  //   colors: ["Black"] 
  // },

  // --- Category: Jackets (400+) ---
  // { 
  //   id: 401, 
  //   name: "Black Zip Jacket", 
  //   category: "Jackets", 
  //   image: "/product3a.png", 
  //   images: ["/product1b.jpeg", "/model3.jpeg", "/product3a.png"],
  //   description: "Our jackets are designed to make a statement while providing effortless protection. Featuring meticulous craftsmanship, technical detailing, and high-quality finishes, they are the perfect layer for transitioning through the seasons.",
  //   price: 30000, 
  //   sizes: ["XL", "2XL", "3XL"],
  //   colors: ["Black"] 
  // },
  // { 
  //   id: 402, 
  //   name: "White Zip Jacket", 
  //   category: "Jackets", 
  //   image: "/product10a.png", 
  //   images: ["/product10a.png", "/product10.jpeg", "/product25.jpeg"],
  //   description: "Our jackets are designed to make a statement while providing effortless protection. Featuring meticulous craftsmanship, technical detailing, and high-quality finishes, they are the perfect layer for transitioning through the seasons.",
  //   price: 30000, 
  //   sizes: ["XL", "2XL", "3XL"],
  //   colors: ["White", "Off-White"] 
  // },

  // --- Category: Sleeveless (500+) ---
  { 
    id: 501, 
    name: "SK Legacy Sleeveless ", 
    category: "Sleeveless", 
    image: "/product (8).png", 
    images: ["/new-products/sleeveless1.jpeg", "/new-products/sleeveless1.jpeg", "/new-products/sleeveless1.jpeg"],
    description: "Our sleeveless collection emphasizes clean lines and unrestricted movement, offering a sleek, contemporary edge for those who prefer a sharp, focused look.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Black", "White"] 
  },
  { 
    id: 502, 
    name: "SK Legacy Sleeveless", 
    category: "Sleeveless", 
    image: "/product (9).png", 
    images: ["/new-products/sleeveless2.jpeg", "/new-products/sleeveless2.jpeg", "/new-products/sleeveless2.jpeg"],
    description: "Our sleeveless collection emphasizes clean lines and unrestricted movement, offering a sleek, contemporary edge for those who prefer a sharp, focused look.",
    price: 30000, 
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Black", "Grey"] 
  }
];