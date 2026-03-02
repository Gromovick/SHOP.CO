import React from 'react';
import { Button } from '../atoms/Button';
import Container from '../templates/Container';
import { cn } from '../../lib';
import hero from '../../assets/images/hero.png';
const benefits = [
  {
    top: '200+',
    bottom: 'International Brands',
  },
  {
    top: '2,000+',
    bottom: 'High-Quality Products',
  },
  {
    top: '30,000+',
    bottom: 'Happy Customers',
  },
];

const Hero = () => {
  return (
    <div className="pt-10 lg:pt-[100px]  relative z-0 overflow-hidden  bg-gray grow" >
      <Container className="z-2 relative">
        <div className="lg:max-w-[600px]">
          <div className="grid gap-5 mb-6">
            <h1 className="text-[36px] font-integral font-bold text-black lg:text-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[14px] font-satoshi text-black/60 lg:text-[16px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <Button
            variant={'secondary'}
            className="w-full px-[54px] mb-5 lg:max-w-[210px]"
          >
            Shop Now
          </Button>
          <div className="flex flex-wrap justify-center gap-8 gap-y-3 mx-auto max-w-[350px] lg:max-w-none lg:justify-start ">
            {benefits.map(({ top, bottom }, index) => {
              return (
                <>
                  <div key={`hero-benefits-${bottom}`} className={''}>
                    <h3 className="font-satoshi text-black text-[24px] font-bold lg:text-[40px]">
                      {top}
                    </h3>
                    <p className="text-black/60 font-satoshi text-[14px] lg:text-[16px]">
                      {bottom}
                    </p>
                  </div>
                  {index !== benefits.length - 1 && (
                    <div
                      className={cn(
                        'w-px bg-black/10',
                        index === 1 && 'w-0 lg:w-px',
                      )}
                    ></div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </Container>
      <img
        src={hero}
        alt=""
        className="z-1 w-full object-cover lg:absolute lg:right-[50px] lg:max-w-[670px] lg:top-0 "
      />
    </div>
  );
};

export default Hero;
