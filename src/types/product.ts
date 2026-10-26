

//A product category
export interface Category {
    id: string;
    name: string;
    slug: string; //url friendly name
    image: string;
}

// A single product in the store
export interface Product {
    id: string;
    name: string;
    slug: string;           // used in the URL: /products/classic-white-tee
    description: string;
    price: number;
    originalPrice?: number;        // optional: set only when on sale (shows strikethrough)
    images: string[];               // array: first one is the main image
    categorySlug: string;            // which category it belongs to
    rating: number;
    reviewCount: number;
    stock: number;
    isFeatured: boolean;
}