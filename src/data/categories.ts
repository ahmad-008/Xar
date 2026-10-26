// Temporary Data

import { Category } from "@/types/product";

// Base URL for all demo images (DummyJSON's free CDN)
export const IMG = "https://cdn.dummyjson.com/product-images";

export const categories: Category[] = [
    {
        id: "c1",
        name: "Men's Shirts",
        slug: "mens-shirts",
        image: `${IMG}/mens-shirts/man-plaid-shirt/thumbnail.webp`,
    },
    {
        id: "c2",
        name: "Women's Dresses",
        slug: "womens-dresses",
        image: `${IMG}/womens-dresses/dress-pea/thumbnail.webp`,
    },
    {
        id: "c3",
        name: "Shoes",
        slug: "shoes",
        image: `${IMG}/mens-shoes/puma-future-rider-trainers/thumbnail.webp`,
    },
    {
        id: "c4",
        name: "Bags",
        slug: "bags",
        image: `${IMG}/womens-bags/women-handbag-black/thumbnail.webp`,
    },

];