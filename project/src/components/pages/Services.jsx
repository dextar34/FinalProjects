import React from 'react';
import ImageWithOverly from '../ImageWithOverly';
import Happy_Hour_img from "../../assets/Happy_Hour_img.png";
import List from '../layer/List';
import BookNow from '../layer/BookNow';
import RotateSpoon from '../layer/RotateSpoon';
import Bredcum from '../layer/Bredcum';
import Barmenu from '../layer/Barmenu';
const Services = () => {
  return (
    <div>
      <Bredcum text="What We Offer"/>
      <Barmenu/>
    <div className="text-white font-Cormorant pb-40 relative ">
      <BookNow className="relative"/>
      <RotateSpoon className='absolute top-[450px] left-[146px]' />
    </div>

    <ImageWithOverly classNameFormain="mt-[112px]" className="flex flex-col justify-center items-center " src={Happy_Hour_img}>
        <div className="flex flex-col justify-center items-center">
        <h2 className='text-[128px] font-Cormorant font-semibold text-[#DCCA87]'>Happy Hours</h2>
        <p className='text-white text-[32px] font-Cormorant font-bold'>Home - Friday  (4:00 Pm - 7:00 pm)</p>
        </div>
      </ImageWithOverly>
    </div>
  );
};

export default Services;