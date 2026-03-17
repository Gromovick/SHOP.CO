import React from 'react';
import Versace from '../../assets/images/brands/versace.svg';
import Zara from '../../assets/images/brands/zara.svg';
import Gucci from '../../assets/images/brands/gucci.svg';
import Prada from '../../assets/images/brands/prada.svg';
import Calvin from '../../assets/images/brands/calvin.svg';
import Container from '../templates/Container';

const brands = [
  { brand: Versace, alt: 'Versace' },
  { brand: Zara, alt: 'Zara' },
  { brand: Gucci, alt: 'Gucci' },
  { brand: Prada, alt: 'Prada' },
  { brand: Calvin, alt: 'calvin' },
];

const BrandsLine = () => {
  return (
    <section className="bg-black">
      <Container className="py-10  flex items-center flex-wrap gap-x-8 gap-y-5 justify-center lg:justify-between">
        {brands.map(({ brand, alt }) => {
          return <img key={alt} alt={alt} src={brand} className="h-6 lg:h-8" />;
        })}
      </Container>
    </section>
  );
};

export default BrandsLine;
