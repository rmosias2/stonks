import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavigationBarProps {
  menu: {
    icon: ReactNode;
    link: string;
    name: string;
  }[];
}

export const NavigationBar = ({ menu }: NavigationBarProps) => {
  return (
    <footer className='fixed bottom-0 w-full h-[70px] flex items-center justify-around  bg-[#F9F7F7]'>
      {menu.map((item) => (
        <Link key={item.name} to={item.link}>
          {item.icon}
        </Link>
      ))}
    </footer>
  );
};
