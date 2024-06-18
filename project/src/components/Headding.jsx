import React from 'react';
import Spoon from './Spoon';

const Headding = ({text, className,modify}) => {
  return (
    <div className={`main  ${className}`}>
      <h2 className={`text text-[#DCCA87] text-[64px] font-Cormorant font-semibold ${modify}`}>{text}</h2>
      
    </div>
  );
}

export default Headding;
