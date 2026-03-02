import React from 'react';
import { cn } from '../../lib';

type Props = { className?: string; children: React.ReactNode };

const Container = ({ className, children }: Props) => {
  return (
    <div className={cn('px-4 mx-auto lg:max-w-[1240px] w-full', className)}>
      {children}
    </div>
  );
};

export default Container;
