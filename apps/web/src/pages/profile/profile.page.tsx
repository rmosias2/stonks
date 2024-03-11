import { Header } from 'web/components';
import {
  AvatarIcon,
  HomeIcon,
  LogoIcon,
  NavigationBar,
  SearchIcon,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@stonks/ui';

export const ProfilePage = () => {
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
      <header className='w-full flex items-center justify-center h-[42px]'>
        <LogoIcon />
      </header>
      <Header />
      <NavigationBar menu={menu} />
      <Tabs className='w-full' defaultValue='account'>
        <TabsList>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>Make changes to your account here.</TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
