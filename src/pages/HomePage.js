import React, { Fragment, useEffect } from 'react'
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
import HomeTopMobile from '../components/home/HomeTopMobile';
import NewArrival from '../components/home/NewArrival';


const HomePage = () => {

useEffect(() => {
  window.scroll(0, 0);
  // eslint-disable-next-line
}, []);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
        <HomeTop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
        <HomeTopMobile />
      </div>
      <FeaturedProducts />
      <NewArrival />
      <Categories />
      <Collection />
      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
}

export default HomePage;