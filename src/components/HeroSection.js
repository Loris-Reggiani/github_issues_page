import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import stockData from '../issues.json';
import { Link } from 'react-router-dom';

var json = require('../issues.json');
//var myObject = JSON.parse(json);

function HeroSection() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>PAGE D'ACCEUIL</h1>
      <p>ISSUES</p>
      <div className=''>
        {stockData.map((data, key) => {
          return (
            <div className ='info_github'  onClick={handleClick} onClick={closeMobileMenu} key={key}>
              <Link to='/services'>{data.title} 
              <div className ='color_info'>
              {data.user.id}
              </div>
              </Link>
            </div>
          );
        })}
        </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
