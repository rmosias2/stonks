import React from 'react';
import { AvatarIcon, HomeIcon, Input, NavigationBar, SearchIcon } from '@stonks/ui';

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
    <div className='h-screen w-screen overflow-hidden'>
      <header className='w-full p-5'>
        <Input placeholder='Search' trailingIcon={<SearchIcon />} />
      </header>
      <section>aa</section>
      <NavigationBar menu={menu} />
    </div>
  );
};
