import React from 'react';
import Logo from '../atoms/Logo';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '../atoms/Button';
import { HiOutlineShoppingCart, HiOutlineUserCircle } from 'react-icons/hi';
import NavBar from '../molecules/NavBar';
import SearchBar from '../molecules/SearchBar';

const Header = () => {
  return (
    <div className="px-4 py-5 bg-white flex items-center gap-4  lg:gap-10 lg:px-[100px] lg:py-6">
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
        <a href="/">
          <HiOutlineShoppingCart color="black" size={24} className="" />
        </a>
        <a href="/">
          <HiOutlineUserCircle color="black" size={24} className="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
