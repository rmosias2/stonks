import { Stepper } from 'web/components';
import { OnboardingLayout } from 'web/layout';

export const OnboardingAdvisorPage = () => {
  return (
    <OnboardingLayout>
      <Stepper
        description='Ja tentou compras ativos e ficou completamente perdido?
        Na Stonks voce nao precisa decidir, aqui voce encontra um especialista que tomara as decisoes por voce.'
        title='Procure um Assessor'
      />
    </OnboardingLayout>
  );
};
