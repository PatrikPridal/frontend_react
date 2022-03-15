import React, { useState } from 'react';

import { images } from '../../components';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';


import './Footer.scss';

const Footer = () => {
  return (
    <>
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)