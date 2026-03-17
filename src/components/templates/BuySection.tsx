import Container from './Container';
import img from '../../assets/images/product.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@smastrom/react-rating/style.css';
import Rating from '../molecules/Rating';
import StarGradientDefs from '../helpers/StarGradientDefs';
import { Button } from '../atoms/Button';

interface Props {
  heading: string;
}

const items = [
  {
    image: img,
    title: 'T-SHIRT WITH TAPE DETAILS',
    rating: 4.5,
    price: 120,
    discountPrice: null,
  },
  {
    image: img,
    title: 'T-SHIRT WITH TAPE DETAILS',
    rating: 2,
    price: 120,
    discountPrice: 90,
  },
  {
    image: img,
    title: 'T-SHIRT WITH TAPE DETAILS',
    rating: 5,
    price: 120,
    discountPrice: 30,
  },
  {
    image: img,
    title: 'T-SHIRT WITH TAPE DETAILS',
    rating: 4,
    price: 500,
    discountPrice: null,
  },
];

const BuySection = ({ heading }: Props) => {
  return (
    <section>
      <StarGradientDefs />
      <Container className="grid">
        <h3 className="uppercase text-center mb-[32px] font-integral font-bold text-[32px] lg:mb-[55px] lg:text-[48px]">
          {heading}
        </h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          direction="horizontal"
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          wrapperClass="justify-between"
          className="mb-[24px] w-full"
        >
          {items.map((item) => {
            return (
              <SwiperSlide
                key={`${item.title}-${item.rating}`}
                className="!w-fit"
              >
                <div className="max-w-50 lg:max-w-[275px]">
                  <div className="w-full aspect-square bg-gray rounded-[13px] mb-[10px] lg:mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-full object-cover select-none"
                    />
                  </div>
                  <p className="font-satoshi font-bold text-[14px] text-black mb-1 lg:mb-2 lg:text-[20px]">
                    {item.title}
                  </p>
                  <div className="mb-1 lg:mb-2">
                    <Rating
                      rating={item.rating}
                      showNums
                      className="max-w-[100px] gap-1 lg:max-w-[130px]"
                    />
                  </div>
                  <p className="font-satoshi text-black text-[20px] font-bold lg:text-[24px] flex gap-[5px]">
                    ${item.discountPrice || item.price}
                    {item.discountPrice && (
                      <span className="text-black/40 line-through">
                        ${item.price}
                      </span>
                    )}
                    {item.discountPrice && (
                      <div className="rounded-[62px] bg-[#FF3333]/10 px-2 py-[3px] flex items-center lg:px-[14px] lg:py-[6px] ">
                        <span className="text-[#FF3333] text-[10px] lg:text-[12px]">
                          {Math.floor(
                            ((item.price - item.discountPrice) * 100) /
                              item.price,
                          )}
                          %
                        </span>
                      </div>
                    )}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Button className="text-[14px]  font-satoshi font-medium w-full text-black rounded-[62px] py-[16px] px-[54px] border border-black/10 lg:text-[16px] lg:max-w-[220px] lg:justify-self-center ">
          View All
        </Button>
      </Container>
    </section>
  );
};

export default BuySection;
