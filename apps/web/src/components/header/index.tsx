import { Avatar, AvatarFallback, AvatarImage, GoldMedal } from '@stonks/ui';

export const Header = () => {
  return (
    <div className='w-full px-4 py-8'>
      <header className='w-full'>
        <div className='flex items-center justify-between w-full'>
          <Avatar className='h-24 w-24'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex items-center w-full justify-center'>
            <div className='flex flex-col'>
              <GoldMedal />
              <p className='text-base font-bold'>CEA</p>
            </div>
            <div className='flex flex-col'>
              <GoldMedal />
              <p className='text-base font-bold'>CPA</p>
            </div>
            <div className='flex flex-col'>
              <GoldMedal />
              <p className='text-base font-bold'>CFP</p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <p className='text-base font-bold'>Warren Buffet</p>
          <p className='text-xs text-[#2F68FA]'>@Link para Instagram/LinkedIn</p>
          <p className='text-xs'>
            Descrição da carreira, experiecia, objetivos ou frases motivacionais que inspiram o assessor dono deste
            perfil.
          </p>
        </div>
      </header>
    </div>
  );
};
