import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

const titleVariants = cva(
  'font-novaSquare font-bold tracking-tight',
  {
    variants: {
      size: {
        sm: '~text-lg/2xl',
        md: '~text-xl/3xl',
        lg: '~text-3xl/5xl',
        xl: '~text-4xl/6xl',
      },
      gradient: {
        true: 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent',
        false: 'text-white',
      },
    },
    defaultVariants: {
      size: 'lg',
      gradient: true,
    },
  }
)

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>

export type TytleProps = HeadingProps & VariantProps<typeof titleVariants>
export const Title = forwardRef<HTMLHeadingElement, TytleProps>(
  ({ size, gradient, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(titleVariants({ size, gradient, className }))}
        {...props}
      />
    )
  }
)

Title.displayName = 'Title'
