import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Hero from '../organisms/Hero';

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="shrink-0 min-h-dvh flex flex-col">
        <Header />
        <Hero />
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

export default HomeLayout;
