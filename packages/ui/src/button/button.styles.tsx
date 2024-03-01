import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex items-center justify-center gap-1 whitespace-nowrap outline-none p-2', {
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: 'bg-[#2F68FA] text-white',
      ghost: 'bg-transparent text-[#2F68FA] border border-[#2F68FA]',
    },
    size: {
      md: 'h-[42px]',
    },
  },
});
