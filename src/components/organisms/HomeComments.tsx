import React, { useRef, useState } from 'react';
import Comment from '../molecules/Comment';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../templates/Container';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Button } from '../atoms/Button';
const breakpoints = {
  640: {
    slidesPerView: 2.75,
  },
  1040: {
    slidesPerView: 3.5,
  },
};

const HomeComments = () => {
  const nextEl = useRef(null);
  const prevEl = useRef(null);
  const swiper = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const getCircularDistance = (a: number, b: number, total: number): number => {
    const diff = Math.abs(a - b);
    return Math.min(diff, total - diff);
  };

  return (
    <div>
      <Container>
        <div className="flex gap-2 justify-between items-end mb-6 lg:mb-10">
          <p className="font-integral font-bold text-[32px] text-black uppercase lg:text-[48px]">
            OUR HAPPY CUSTOMERS
          </p>
          <div className="flex gap-4">
            <Button
              variant={'icon'}
              ref={prevEl}
              onClick={() => swiper.current.slidePrev()}
            >
              <FaArrowLeft className="size-6 text-black" />
            </Button>
            <Button
              variant={'icon'}
              ref={nextEl}
              onClick={() => swiper.current.slideNext()}
            >
              <FaArrowRight className="size-6 text-black" />
            </Button>
          </div>
        </div>
      </Container>

      <Swiper
        breakpoints={breakpoints}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides
        loop
        onSlideChange={(e) => {
          console.log(e);

          setActiveSlide(e.realIndex);
          console.log(e.realIndex);
        }}
        className="w-full"
        navigation={{ nextEl: nextEl.current, prevEl: prevEl.current }}
        onSwiper={(sw) => {
          console.log(sw);

          swiper.current = sw;
        }}
      >
        {Array(10)
          .fill(0)
          .map((Item, index) => {
            return (
              <SwiperSlide key={`home-comment-${index}`}>
                <Comment
                  blur={getCircularDistance(activeSlide, index, 10) === 2}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeComments;
