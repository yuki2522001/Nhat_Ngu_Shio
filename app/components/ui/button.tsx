import React from "react"
import clsx from "clsx"

type ButtonVariant = "primary" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  }

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  }

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
