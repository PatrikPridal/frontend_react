import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';


import './Footer.scss';

const Footer = () => {
  


  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:pridalpatrik@seznam.cz" className="p-text">pridalpatrik@seznam.cz</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +420 607 513 387" className="p-text">+420 607 513 387</a>
        </div>
      </div>


      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onchange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onchange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value={message}
            name={message} 
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>
      </div>


    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)