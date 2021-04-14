import '../../App.css';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import '../HeroSection.css';
import stockData from '../../issues.json';
import { Link } from 'react-router-dom';

var json = require('../../issues.json');
//var myObject = JSON.parse(json);

export default function Services() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className='hero-container'>
    <video src='/videos/video-2.mp4' autoPlay loop muted />
    <div className=''>
        {stockData.map((data, key) => {
          return (
            <div className ='info_github'  onClick={handleClick} onClick={closeMobileMenu} key={key}>
              <Link to='/services'>{data.title}</Link>
            </div>
          );
        })}
        </div>
    </div>  
  );
}
