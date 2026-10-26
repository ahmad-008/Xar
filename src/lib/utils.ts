//Pricing Format


const priceFormatter = new Intl.NumberFormat("en-PK",{
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0, 
});

// 2499 → "Rs 2,499"
export function formatPrice(amount: number):string{
    return priceFormatter.format(amount);
}

//Discount percent
export function getDiscountPercent(originalPrice: number, price: number): number{
    return Math.round(((originalPrice - price)/ originalPrice)*100);
}