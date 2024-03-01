import onboardingBg from 'web/assets/onboarding.png';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <div className='flex md:items-center justify-center h-screen'>
      <div
        style={{
          backgroundImage: `url(${onboardingBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100%',
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
};
