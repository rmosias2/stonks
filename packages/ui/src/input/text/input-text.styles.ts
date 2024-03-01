import { cva } from 'class-variance-authority';

export const labelVariants = cva(
  `absolute 
text-body-1
text-gray-500
duration-300 
transform 
-translate-y-4 
scale-75 
z-10 
origin-[0]  
peer-hover:bg-background-neutral-boldest
peer-focus:bg-background-neutral-light
peer-focus:scale-75 
peer-focus:-translate-y-4 
peer-placeholder-shown:scale-100 
peer-placeholder-shown:-translate-y-1/2 
peer-placeholder-shown:top-1/2 
left-1`,
  {
    defaultVariants: {
      sizes: 'lg',
    },
    variants: {
      disabled: {
        true: 'text-text-disabled peer-hover:bg-background-neutral-disabled peer-focus:bg-background-neutral-disabled',
      },
      error: {
        false: '',
        true: 'text-red-500 bg-background-neutral-bold',
      },
      sizes: {
        lg: 'px-[10px] top-[30px] peer-focus:px-[10px] peer-focus:top-[30px]',
      },
    },
  }
);

export const inputVariants = cva('peer text-gray-900 w-full h-full outline outline-[1px] outline-gray-300', {
  defaultVariants: {
    sizes: 'lg',
  },
  variants: {
    error: {
      false: '',
      true: 'outline-red-500',
    },
    sizes: {
      lg: 'px-2 h-[48px]  hover:outline-gray-400 focus:outline-gray-900 focus:outline-2',
    },
    variant: {},
  },
});
