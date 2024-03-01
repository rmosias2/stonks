import React, { ReactNode, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@stonks/common-utils';
import { buttonVariants } from './button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  fitContent?: boolean;
  isLoading?: boolean;
  leadIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      fitContent = true,
      isLoading,
      leadIcon,
      size,
      trailingIcon,
      type = 'button',
      variant,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} type={type} {...props}>
        {leadIcon}
        {props.children}
        {!isLoading && trailingIcon}
        {isLoading && (
          <svg
            className={cn('animate-spin')}
            data-testid='loading-icon'
            fill='none'
            height='20'
            viewBox='0 0 20 20'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.99999 18.9584C5.05832 18.9584 1.04166 14.9417 1.04166 10.0001C1.04166 8.03342 1.66666 6.16675 2.84999 4.60008C3.05832 4.32508 3.44999 4.27508 3.72499 4.48341C3.99999 4.69175 4.05832 5.08341 3.84999 5.35841C2.83332 6.70008 2.29166 8.30841 2.29166 10.0001C2.29166 14.2501 5.74999 17.7084 9.99999 17.7084C14.25 17.7084 17.7083 14.2501 17.7083 10.0001C17.7083 5.75008 14.25 2.29175 9.99999 2.29175C9.65832 2.29175 9.37499 2.00841 9.37499 1.66675C9.37499 1.32508 9.65832 1.04175 9.99999 1.04175C14.9417 1.04175 18.9583 5.05841 18.9583 10.0001C18.9583 14.9417 14.9417 18.9584 9.99999 18.9584Z'
              fill='currentColor'
            />
          </svg>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };
