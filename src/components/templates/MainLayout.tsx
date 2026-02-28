import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
