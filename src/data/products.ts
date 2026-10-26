

import { Product } from "@/types/product";
import { IMG } from "@/data/categories";

export const products: Product[] = [
    //Mens shirt
    {

        id: "p1",
        name: "Classic Plaid Shirt",
        slug: "classic-plaid-shirt",
        description: "Soft cotton plaid shirt with a relaxed fit. Perfect for casual days and weekend outings.",
        price: 2499,
        originalPrice: 5499, // on sale
        images: [
            `${IMG}/mens-shirts/man-plaid-shirt/1.webp`,
            `${IMG}/mens-shirts/man-plaid-shirt/2.webp`,
        ],
        categorySlug: "mens-shirts",
        rating: 4.5,
        reviewCount: 128,
        stock: 25,
        isFeatured: true,

    },
    {
        id: "p2",
        name: "Short Sleeve Summer Shirt",
        slug: "short-sleeve-summer-shirt",
        description: "Lightweight and breathable short sleeve shirt, made for hot summer days.",
        price: 1899,
        images: [
            `${IMG}/mens-shirts/man-short-sleeve-shirt/1.webp`,
            `${IMG}/mens-shirts/man-short-sleeve-shirt/2.webp`,
        ],
        categorySlug: "mens-shirts",
        rating: 4.2,
        reviewCount: 64,
        stock: 40,
        isFeatured: true,
    },
    {
        id: "p3",
        name: "Slim Fit Check Shirt",
        slug: "slim-fit-check-shirt",
        description: "Tailored slim fit check shirt that works for both office and evening wear.",
        price: 2999,
        images: [
            `${IMG}/mens-shirts/men-check-shirt/1.webp`,
            `${IMG}/mens-shirts/men-check-shirt/2.webp`,
        ],
        categorySlug: "mens-shirts",
        rating: 4.7,
        reviewCount: 89,
        stock: 0, // out of stock
        isFeatured: false,
    },
    // ---------- Women's Dresses ----------
    {
        id: "p4",
        name: "Floral Pea Dress",
        slug: "floral-pea-dress",
        description: "Elegant flowing dress with a flattering silhouette, ideal for parties and events.",
        price: 5499,
        originalPrice: 6999,
        images: [
            `${IMG}/womens-dresses/dress-pea/1.webp`,
            `${IMG}/womens-dresses/dress-pea/2.webp`,
        ],
        categorySlug: "womens-dresses",
        rating: 4.8,
        reviewCount: 212,
        stock: 12,
        isFeatured: true,
    },
    {
        id: "p5",
        name: "Corset Dress with Black Skirt",
        slug: "corset-dress-black-skirt",
        description: "Statement corset top paired with a sleek black skirt for a bold evening look.",
        price: 6999,
        images: [
            `${IMG}/womens-dresses/corset-with-black-skirt/1.webp`,
            `${IMG}/womens-dresses/corset-with-black-skirt/2.webp`,
        ],
        categorySlug: "womens-dresses",
        rating: 4.4,
        reviewCount: 47,
        stock: 8,
        isFeatured: false,
    },

    // ---------- Shoes ----------
    {
        id: "p6",
        name: "Future Rider Trainers",
        slug: "future-rider-trainers",
        description: "Retro-inspired running trainers with cushioned soles for all-day comfort.",
        price: 8999,
        originalPrice: 11999,
        images: [
            `${IMG}/mens-shoes/puma-future-rider-trainers/1.webp`,
            `${IMG}/mens-shoes/puma-future-rider-trainers/2.webp`,
        ],
        categorySlug: "shoes",
        rating: 4.6,
        reviewCount: 156,
        stock: 18,
        isFeatured: true,
    },
    {
        id: "p7",
        name: "Classic Red Heels",
        slug: "classic-red-heels",
        description: "Timeless red heels that add a confident pop of colour to any outfit.",
        price: 4499,
        images: [
            `${IMG}/womens-shoes/red-shoes/1.webp`,
            `${IMG}/womens-shoes/red-shoes/2.webp`,
        ],
        categorySlug: "shoes",
        rating: 4.3,
        reviewCount: 73,
        stock: 15,
        isFeatured: true,
    },

    // ---------- Bags ----------
    {
        id: "p8",
        name: "Black Leather Handbag",
        slug: "black-leather-handbag",
        description: "Spacious everyday handbag in premium faux leather with multiple compartments.",
        price: 3999,
        images: [
            `${IMG}/womens-bags/women-handbag-black/1.webp`,
            `${IMG}/womens-bags/women-handbag-black/2.webp`,
        ],
        categorySlug: "bags",
        rating: 4.5,
        reviewCount: 98,
        stock: 30,
        isFeatured: true,
    },

];