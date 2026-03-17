import React from 'react';
import Rating from './Rating';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { cn } from '../../lib';
type Props = { blur?: boolean };

const Comment = ({ blur = false }: Props) => {
  return (
    <div
      className={cn(
        'bg-white p-6 border border-black/10 rounded-[20px] lg:py-7 lg:px-8',
        blur && 'blur-[2px]',
      )}
    >
      <Rating
        rating={5}
        className="max-w-[120px] gap-2 mb-3 lg:max-w-[140px] lg:mb-4"
      />
      <div className="flex gap-1 items-center mb-2 lg:mb-3">
        <span className="font-satoshi font-bold text-[16px] lg:text-[20px]">
          Sarah M.
        </span>
        <IoCheckmarkCircle className="text-[#01AB31] w-[20px] lg:w-6 " />
      </div>
      <p className="text-[14px] font-satoshi text-black/60 lg:text-[16px]">
        "I'm blown away by the quality and style of the clothes I received from
        Shop.co. From casual wear to elegant dresses, every piece I've bought
        has exceeded my expectations."
      </p>
    </div>
  );
};

export default Comment;
