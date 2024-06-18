import React from 'react';
import { Link } from 'react-router-dom';
import rotetSpon from '../assets/rotetSpon.png';

const rotetSpons = () => {
  return (
    <div className='text-white p-20'>
      <picture>
      <Link   to='#'>
        <img className=' animate-spin-slow'  src={rotetSpon}/>

      </Link>
      </picture>
    </div>
  );
}

export default rotetSpons;
