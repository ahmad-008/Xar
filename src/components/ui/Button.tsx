
//Resusable Buttons

import { ButtonHTMLAttributes } from "react";

//Allowed options
// Union types: only these exact strings are accepted

type Variant = "primary" | "secondary" | "outline" | "danger" | "success";
type Size = "sm" | "md" | "lg";


// Props
//"extends" = take all native button props, then add ours
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant; //optional - defaults to primary
    size?: Size; //optional defaults to md
}

//Style maps
//Record<keys, value> = an object that must have every key
const variantStyles: Record<Variant, string> = {
    primary: "bg-brand text-white hover:bg-brand-light",
    secondary: "bg-surface text-brand hover:bg-gray-200",
    outline: "border border-gray-300 text-brand hover:bg-surface",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
};

const sizeStyles: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",

};

//component
export default function Button({
    variant = "primary", //default if not passed
    size = "md",
    className ="", //extra classes from parent
    ...props        // EVERYTHING else (onClick, type, children, disabled...)
}: ButtonProps) {
    return (
        <button
            className={`inline-flex items-center justify-center gap-2 rounded-lg
                font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50
                ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
                {...props}
        />

        
    );

}