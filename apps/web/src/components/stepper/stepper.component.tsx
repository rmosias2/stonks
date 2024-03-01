import { Button } from '@stonks/ui';

interface StepperProps {
  description: string;
  title: string;
}

export const Stepper = ({ description, title }: StepperProps) => {
  return (
    <div className='h-[242px] bg-white absolute bottom-0 w-full px-4 py-8 flex flex-col justify-between'>
      <div className='flex flex-col justify-start gap-2 relative'>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='text-xs'>{description}</p>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <Button className='w-full' variant='ghost'>
          Logar
        </Button>
        <Button className='w-full'>Cadastrar</Button>
      </div>
    </div>
  );
};
