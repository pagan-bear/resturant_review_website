/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderContainer from './HeaderContainer';
import BannerContainer from './BannerContainer';
import ContentContainer from './ContentContainer';
import RestaurantContainer from './RestaurantContainer';
import FooterContainer from './FooterContainer';

import '../stylesheets/AppContainer.css';

const AppContainer = () => (
  <div className='AppContainer'>
    <HeaderContainer />
    <BannerContainer />
    <ContentContainer />
    <FooterContainer />
  </div>
);

export default AppContainer;