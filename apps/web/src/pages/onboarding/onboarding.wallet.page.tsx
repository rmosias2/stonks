import { Stepper } from 'web/components';
import { OnboardingLayout } from 'web/layout';

export const OnboardingWalletPage = () => {
  return (
    <OnboardingLayout>
      <Stepper
        description='Os assessores criam carteiras com diferentes objetivos, escolha a que mais combina com os seus.
        Lembre sempre: o seu dinheiro fica sempre na na sua conta stonks, o assessor apenas escolhe os ativos'
        title='Escolha uma Carteira'
      />
    </OnboardingLayout>
  );
};
