import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

const titleVariants = cva('font-novaSquare font-bold text-blue-700', {
  variants: {
    size: {
      md: '~text-xl/3xl',
      lg: '~text-3xl/5xl',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>

export type TytleProps = HeadingProps & VariantProps<typeof titleVariants>
export const Title = forwardRef<HTMLHeadingElement, TytleProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(titleVariants({ size, className }))}
        {...props}
      />
    )
  },
)

Title.displayName = 'Title'
