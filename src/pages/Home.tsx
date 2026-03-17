import React from 'react';
import BrandsLine from '../components/organisms/BrandsLine';
import NewArrivals from '../components/organisms/NewArrivals';
import BuySection from '../components/templates/BuySection';
import BrowseSection from '../components/organisms/BrowseSection';
import HomeComments from '../components/organisms/HomeComments';
import PageSection from '../components/templates/PageSection';
import Container from '../components/templates/Container';

const Home = () => {
  return (
    <div>
      <BrandsLine />
      <PageSection className=" space-y-10 lg:space-y-16">
        <NewArrivals />
        <Container>
          <div className="w-full h-px bg-black/10"></div>
        </Container>

        <BuySection heading="top selling" />
      </PageSection>
      <PageSection dir="bottom">
        <BrowseSection />
      </PageSection>
      <PageSection dir="bottom">
        <HomeComments />
      </PageSection>
    </div>
  );
};

export default Home;
