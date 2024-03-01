import { Button, Input, LogoIcon } from '@stonks/ui';
import { OnboardingLayout } from 'web/layout';

export const LoginPage = () => {
  return (
    <OnboardingLayout>
      <div className='h-[333px] bg-white absolute bottom-0 w-full px-4 py-8 flex flex-col justify-between'>
        <div className='w-full flex items-center justify-center'>
          <LogoIcon />
        </div>
        <div className='flex flex-col justify-start gap-2 relative'>
          <Input label='Email' />
          <Input label='Senha' type='password' />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <Button className='w-full'>Entrar</Button>
        </div>
      </div>
    </OnboardingLayout>
  );
};
