import React from 'react';
import casual from '../../assets/images/browse/casual.png';
import formal from '../../assets/images/browse/formal.png';
import party from '../../assets/images/browse/party.png';
import gym from '../../assets/images/browse/gym.png';
import { cn } from '../../lib';
import Container from '../templates/Container';

const styles = [
  {
    title: 'Casual',
    img: casual,
    className:
      'top-[-65px] h-[180%] right-[-75px] lg:top-[-110px] lg:right-[-200px] lg:h-[200%]',
    wrapperClass: 'lg:col-span-1',
  },
  {
    title: 'Formal',
    img: formal,
    className:
      'h-[220%] top-[-80px] right-[-340px] lg:h-[250%] lg:top-[-120px] lg:right-[-520px]',
    wrapperClass: 'lg:col-span-2',
  },
  {
    title: 'Party',
    img: party,
    className:
      'h-[170%] top-[-90px] right-[-70px] lg:h-[200%] lg:top-[-150px] lg:right-[-120px]',
    wrapperClass: 'lg:col-span-2',
  },
  {
    title: 'Gym',
    img: gym,
    className:
      'h-[230%] top-[-90px] right-[-40px] lg:h-[240%] lg:top-[-150px] lg:right-[-100px]',
    wrapperClass: 'lg:col-span-1',
  },
];

const BrowseSection = () => {
  return (
    <Container>
      <div className="bg-[#F0F0F0] rounded-[20px] pt-10 pb-7 px-6 lg:rounded-[40px] lg:px-[64px] lg:py-[76px]">
        <p className="font-integral text-[32px] text-center font-bold mb-7 text-black lg:text-[48px] lg:mb-[64px]">
          BROWSE BY dress STYLE
        </p>
        <div className="grid gap-4 w-full lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {styles.map(({ title, img, className, wrapperClass }) => {
            return (
              <a
                key={title}
                href="/"
                className={cn(
                  'z-0 relative py-4 px-6 bg-white overflow-hidden rounded-[20px] h-[190px] flex lg:h-[289px] lg:py-[25px] lg:px-[36px]',
                  wrapperClass,
                )}
              >
                <p className="font-satoshi font-bold text-[24px] relative z-1 lg:text-[36px]">
                  {title}
                </p>
                <img
                  src={img}
                  alt=""
                  className={cn(
                    'absolute h-[160%]  max-w-none cover object-center',
                    className,
                  )}
                />
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default BrowseSection;
