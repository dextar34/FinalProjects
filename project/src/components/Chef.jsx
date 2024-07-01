import React from 'react';
import ImageWithOverly from './ImageWithOverly';
import ImageWithBorder from './ImageWithBorder';
import HeadingWithSpoon from './layer/HeadingWithSpoon';
import Headding from './Headding';
import Comma from '../assets/“.png';
import luoSignature from '../assets/KevinLuo.png';
import Luo from '../assets/image2.png';
import Bg from '../../public/BG.jpg';

const Chef = () => {
  return (
    <div className='py-[152px]'>
      <ImageWithOverly value="h-[1045px]" src={Bg} className=" ">

      <div className='flex items-center gap-x-[120px]'>
      <div className='Img'>
      <ImageWithBorder src={Luo}/>
      </div>


      <div className='text w-[570px]'>
      <HeadingWithSpoon text="Chef’s Word"/>
     
        <Headding modify=" tracking-[1.92px]" text="What we believe in"/>
        <div className='flex items-center gap-x-[18px]'>
            <img src={Comma} alt="../assets/“.png" />
            <p className='text-[#AAAAAA] text-base italic tracking-[0.64px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className='text-[#AAAAAA] text-base italic tracking-[0.64px] leading-7 py-16'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

        <h3 className='text-[32px] text-[#DCCA87] font-Cormorant tracking-[1.28px]'>Kevin Luo</h3>

        <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] pt-4 pb-16'>Chef & Founder</p>
        <img src={luoSignature}/>
      </div>
      </div>

      </ImageWithOverly>
    </div>
  );
}

export default Chef;