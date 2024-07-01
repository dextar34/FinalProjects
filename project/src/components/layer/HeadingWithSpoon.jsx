import React from 'react';
import spoon from '../../assets/spoon.png';

const HeadingWithSpoon = ({text}) => {
  return (
    <div>
      <h3 className='text-[#FFFFFF] text-[23px] font-Cormorant font-bold pt-20'>{text}</h3>
      <img className='py-2' src={spoon}/>
    </div>
  );
}

export default HeadingWithSpoon;
