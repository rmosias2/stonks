import React from 'react';
import profileBg from 'web/assets/profile.png';
import { AvatarIcon, HomeIcon, Input, NavigationBar, ProfileCard, SearchIcon } from '@stonks/ui';

export const AdvisiorPage = () => {
  const menu = [
    {
      icon: <HomeIcon />,
      link: '/',
      name: 'Home',
    },
    {
      icon: <SearchIcon />,
      link: '/advisiors',
      name: 'Advisiors',
    },

    {
      icon: <AvatarIcon />,
      link: '/profile',
      name: 'Profile',
    },
  ];
  return (
    <div className='w-screen overflow-hidden'>
      <header className='w-full p-5'>
        <Input placeholder='Search' trailingIcon={<SearchIcon />} />
      </header>
      <section className='flex gap-2 items-start px-4 pb-20'>
        <ProfileCard
          description='Perfil Arrojado Gosta de Ações Nunca aposte contra os EUA'
          src={profileBg}
          subDescription='CEA, CPA, CFP'
          title='Warren Buffet'
        />
        <ProfileCard
          description='Perfil Arrojado Gosta de Ações Nunca aposte contra os EUA'
          src={profileBg}
          subDescription='CEA, CPA, CFP'
          title='Warren Buffet'
        />
      </section>
      <NavigationBar menu={menu} />
    </div>
  );
};
