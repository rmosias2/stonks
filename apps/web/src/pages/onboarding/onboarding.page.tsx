import { Stepper } from 'web/components';
import { OnboardingLayout } from 'web/layout';

export const OnboardingPage = () => {
  return (
    <OnboardingLayout>
      <Stepper description='Texto Explicando o que é' title='Bem Vindo ao Stonks' />
    </OnboardingLayout>
  );
};
