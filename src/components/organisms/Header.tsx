import React from 'react';
import Logo from '../atoms/Logo';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '../atoms/Button';
import { HiOutlineShoppingCart, HiOutlineUserCircle } from 'react-icons/hi';
import NavBar from '../molecules/NavBar';
import SearchBar from '../molecules/SearchBar';
import Container from '../templates/Container';

const navIcons = [
  { icon: HiOutlineShoppingCart, label: 'Cart', href: '/cart' },
  { icon: HiOutlineUserCircle, label: 'Account', href: '/account' },
];

const Header = () => {
  return (
    <Container className="">
      <div className="py-5 bg-white flex items-center justify-between  gap-4  lg:gap-10  lg:py-6">
        <Button
          variant="icon"
          className="flex items-center justify-center lg:hidden"
        >
          <RxHamburgerMenu color="black" size={24} className="" />
        </Button>
        <Logo />
        <NavBar />
        <div className="flex gap-3 items-center justify-end grow">
          <SearchBar className="lg:grow" />
          {navIcons.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} aria-label={label}>
              <Icon className="size-6 text-black" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;
