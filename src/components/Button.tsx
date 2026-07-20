import type { ButtonHTMLAttributes } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ value, className, ...props }: ButtonProps) {
   return (
      <button
         className={`${className} h-fit rounded-lg px-4 py-2 text-white hover:bg-blue-700 transition-colors`}
         {...props}
      >{value}</button>
   )
}