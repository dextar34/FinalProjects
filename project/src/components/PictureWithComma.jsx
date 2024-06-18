import React from 'react';
import Comma from '../assets/“.png';
import { Link } from 'react-router-dom';

const PictureWithComma = ({className, src, alt }) => {
  return (
    <div className='pt-20'>
      <Link>
      <div className='main w-[190px] h-[190px] relative'>
        <img className={`w-full ${className}`} src={src} alt={alt}/>
        <img className={` bottom-0 right-0 translate-y-[20px] translate-x-[16px] z-50 absolute ${className}`} src={Comma} alt='../assets/“.png'/>
      </div>
      </Link>
    </div>
  );
}

export default PictureWithComma;
