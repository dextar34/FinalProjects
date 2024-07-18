import React from 'react';
import { Link } from 'react-router-dom';

const ImageWithBorder = ({src, alt, className}) => {
return (
<div className='pt-20 '>

  <Link to='#'>
  <div className='main w-[586px] h-[741px] relative'>
    <img className={`absolute z-20 object-cover w-full ${className}`} src={src} alt={alt} />
    <div
      className='bord1 h-[435px] w-[435px] bg-[#DCCA87] absolute top-0 right-0 -translate-y-6 translate-x-6'>
    </div>
    <div
      className='bord2 h-[435px] w-[435px] bg-[#DCCA87] absolute bottom-0 left-0 translate-y-6 -translate-x-6'>
    </div>
  </div>
  </Link>




</div>
);
}

export default ImageWithBorder;