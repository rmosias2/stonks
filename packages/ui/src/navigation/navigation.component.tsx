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
    <footer className='absolute bottom-0 w-full h-9 flex items-center justify-around mb-5'>
      {menu.map((item) => (
        <Link key={item.name} to={item.link}>
          {item.icon}
        </Link>
      ))}
    </footer>
  );
};
