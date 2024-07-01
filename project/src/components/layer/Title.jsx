import React from 'react';

const Title = ({text, className}) => {
  return (
    <div className={`text-[#DCCA87] text-[32px] tracking-[1.28px] font-Cormorant bg-transparent ${className}`}>
      {text}
    </div>
  );
}

export default Title;
