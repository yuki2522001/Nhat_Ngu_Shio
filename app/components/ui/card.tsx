import React from "react"
import clsx from "clsx"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx("p-6", className)} {...props}>
      {children}
    </div>
  )
}
