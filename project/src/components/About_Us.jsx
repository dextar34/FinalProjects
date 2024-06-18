import React from 'react';
import Button from './Button';
import Headding from './Headding';
import Spoon from './Spoon';

const About_Us = ({className,txt,direction,txtAaling}) => {
  return (
    <div className={`max-w-[523px] flex flex-col ${direction}`}>
        <Headding text={txt}/>
        <Spoon className={`${className}`}/>
      <p className={`text-base leading-7 font-Open text-[#AAAAAA] tracking-[0.64px] ${txtAaling}  py-8`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <Button text='Know More'/>
    </div>
  );
}

export default About_Us;
