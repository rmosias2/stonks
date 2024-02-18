interface ProfileCardProps {
  description?: string;
  src: string;
  subDescription?: string;
  title?: string;
}

export const ProfileCard = ({ description, src, subDescription, title }: ProfileCardProps) => {
  return (
    <div className='w-[172px] h-[285px] bg-[#F9F7F7] flex flex-col items-center justify-start py-2 px-3'>
      <img alt='' className='max-w-[153px] max-h-[136px]' src={src} />
      <div className='w-full'>
        <p className='font-semibold text-base'>{title}</p>
        <div className='text-xs text-[#6E6E6E] font-semibold flex flex-col gap-1'>
          <p>{subDescription}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
