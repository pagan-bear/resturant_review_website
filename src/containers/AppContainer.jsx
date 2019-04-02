/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderContainer from './HeaderContainer';
import BannerContainer from './BannerContainer';
import LeftSideContainer from './LeftSideContainer';
import RightSideContainer from './RightSideContainer';
import RestaurantContainer from './RestaurantContainer';
import FooterContainer from './FooterContainer';

const AppContainer = () => (
  <div>
    <HeaderContainer />
    <BannerContainer />
    <LeftSideContainer />
    <RightSideContainer />
    <RestaurantContainer />
    <FooterContainer />
  </div>
);

export default AppContainer;