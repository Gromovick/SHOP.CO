import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="shrink-0">
        <Header />
      </div>
      <div className="grow flex">
        <div className="w-full">{children}</div>
      </div>
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
