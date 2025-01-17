import React, { FC, HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const headingVariants = cva(
  'text-black dark:text-white lg:text-left font-extrabold leading-tight tracking-tighter ',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl, md:text-6xl lg:text-7xl',
        sm: 'text-xl, md:text-2xl lg:text-3xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  },
);
LargeHeading.displayName = 'LargeHeading';

export default LargeHeading;
