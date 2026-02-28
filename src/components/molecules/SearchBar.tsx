import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { cn } from '../../lib';

interface Props  {
    className?: string;
}

const SearchBar = ({ className }: Props) => {
  return (
    <div className={cn("",className)}>
      <div
        className='px-4 py-3 bg-gray 
    rounded-[62px] items-center 
    gap-3 focus-within:outline-1 outline-gray-400 hidden lg:flex'
      >
        <HiOutlineSearch color="black" size={24} className="" />
        <input
          type="text"
          className="focus-within:outline-none text-black placeholder:text-black/40"
          placeholder="Search for products..."
        />
      </div>
      <a href="/" className="lg:hidden">
        <HiOutlineSearch color="black" size={24} className="" />
      </a>
    </div>
  );
};

export default SearchBar;
