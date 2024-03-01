import { InputHTMLAttributes, ReactElement, cloneElement, forwardRef } from 'react';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@stonks/common-utils';
import { inputVariants, labelVariants } from './input-text.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  helperText?: string;
  label: string;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, label, leadingIcon, sizes, trailingIcon, type, variant, ...props }, ref) => {
    return (
      <div>
        <div className='relative w-full'>
          {leadingIcon &&
            cloneElement(leadingIcon, {
              className: 'absolute left-2 top-1/2 transform -translate-y-1/2',
            })}
          <input
            autoComplete='off'
            className={cn(inputVariants({ className, error: !!error, sizes, variant }))}
            placeholder=' '
            ref={ref}
            type={type}
            {...props}
          />
          <label className={cn(labelVariants({ disabled: props.disabled, error: !!error, sizes }))} htmlFor={props.id}>
            {label}
          </label>
          {trailingIcon &&
            cloneElement(trailingIcon, {
              className: 'absolute right-2 top-1/2 transform -translate-y-1/2',
            })}
        </div>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
