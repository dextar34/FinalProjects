import React from 'react';

const Spoon = ({className,txt}) => {
  return (
    <div className='flex flex-col items-center float-start'>
      <p className='font-Cormorant text-white font-bold text-2xl tracking-wider'>{txt}</p>
      <img className={` py-2 ${className}`} src="../src/assets/spoon.png" alt="../assets/spoon.png"/> 
    </div>
  );
}

export default Spoon;
