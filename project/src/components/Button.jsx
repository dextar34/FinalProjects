import React from 'react';

const Button = ({className, text}) => {
  return (
    <button className={`py-2 px-8 bg-[#DCCA87] text-[#0C0C0C] hover:bg-[#e7e6e0] font-Cormorant text-base font-bold tracking-[0.64px] transition-all duration-300 ${className}`}>
        {text}
    </button>
  );
}

export default Button;
