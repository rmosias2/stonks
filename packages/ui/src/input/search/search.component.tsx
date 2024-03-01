import { InputHTMLAttributes, cloneElement, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  trailingIcon?: React.ReactElement;
}

const SearchInput = forwardRef<HTMLInputElement, InputProps>(({ className, trailingIcon, ...props }, ref) => {
  return (
    <div>
      <div className='relative w-full flex items-center gap-2'>
        <input className='bg-[#D9D9D9] h-[40px] rounded-[10px] w-full pl-5 outline-none' ref={ref} {...props} />
        {trailingIcon &&
          cloneElement(trailingIcon, {
            className: 'absolute right-2 top-1/2 transform -translate-y-1/2',
          })}
      </div>
    </div>
  );
});
SearchInput.displayName = 'SearchInput';

export { SearchInput };
