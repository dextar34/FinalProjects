import React from 'react';
import Spoon from '../Spoon';
import Container from '../Container';
import About_Us from '../About_Us';
import ImageWithOverly from '../ImageWithOverly';
import BookNow from '../layer/BookNow';
import List from '../layer/List';
import RotateSpoon from '../layer/RotateSpoon';

const Home = () => {
return (
<div>
  <Container>
    <p className='text-white text-center text-2xl py-60'>SLIDER</p>
    <div className="pb-[150px]">
      <ImageWithOverly src='./src/assets/BG.png' className='py-[150px] '>
        <div className=" relative z-50 flex gap-x-20 items-center mx-[210px] pb-40">
          <About_Us className='rotate-180' txt='About Us' direction='items-end' txtAaling='text-end' />
          <picture className=''>
            <img src="./src/assets/knife.png" alt="" />
          </picture>
          <About_Us txt='Our History' className='' direction='items-start' txtAaling='text-start' />
        </div>
        <picture className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-9'>
          <img src="./src/assets/G.png" alt="./src/assets/G.png" />
        </picture>
      </ImageWithOverly>
    </div>

    <div className="text-white font-Cormorant pb-40 relative ">
      <ImageWithOverly src='./src/assets/glass.png'>
        <div className="absolute top-[293px] left-[145px]">
          <ul className='flex flex-col gap-y-16'>
            <List text='Bar Menu' className='font-semibold text-6xl hover:underline transition-all duration-500' />
            <List text='Food Menu' className='font-semibold text-6xl hover:underline transition-all duration-500' />
            <List text='Desserts Menu' className='font-semibold text-6xl hover:underline transition-all duration-500' />
          </ul>

        </div>
      </ImageWithOverly>

      <RotateSpoon className='absolute top-[32px] left-[145px]' />
    </div>

    <BookNow />

  </Container>
</div>
);
}

export default Home;