/* eslint-disable no-unused-vars */
import React from 'react';
import LeftSideContainer from './LeftSideContainer';
import RightSideContainer from './RightSideContainer';

import '../stylesheets/ContentContainer.css';

const ContentContainer = () => (
  <div className='ContentContainer'>
    <LeftSideContainer />
    <RightSideContainer />
  </div>
);

export default ContentContainer;