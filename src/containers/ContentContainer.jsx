/* eslint-disable no-unused-vars */
import React from 'react';
import LeftSideContainer from './LeftSideContainer';
import RightSideContainer from './RightSideContainer';

import '../stylesheets/ContentContainer.css';
import MidContainer from './MidContainer';

const ContentContainer = () => (
  <div className='ContentContainer'>
    <LeftSideContainer />
    <MidContainer />
    <RightSideContainer />
  </div>
);

export default ContentContainer;