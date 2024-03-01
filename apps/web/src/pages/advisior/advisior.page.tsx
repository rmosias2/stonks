import React from 'react';
import profileBg from 'web/assets/profile.png';
import { AvatarIcon, HomeIcon, SearchInput, NavigationBar, ProfileCard, SearchIcon } from '@stonks/ui';

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
        <SearchInput placeholder='Search' trailingIcon={<SearchIcon />} />
      </header>
      <section className='flex items-start px-4 pb-20 flex-wrap gap-2'>
        <div className='flex items-center gap-2'>
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
        </div>
        <div className='flex items-center gap-2'>
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
        </div>
        <div className='flex items-center gap-2'>
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
        </div>
      </section>
      <NavigationBar menu={menu} />
    </div>
  );
};
