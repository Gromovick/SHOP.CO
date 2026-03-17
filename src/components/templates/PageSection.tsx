import React from 'react';
import { cn } from '../../lib';

type Props = {
  className?: string;
  children: React.ReactNode;
  dir?: 'both' | 'top' | 'bottom';
};

const PageSection = ({ className, children, dir = 'both' }: Props) => {
  return (
    <div
      className={cn(
        'py-[50px] lg:py-20',
        dir === 'top' && 'pb-0 lg:pb-0',
        dir === 'bottom' && 'pt-0 lg:pt-0',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PageSection;
