import React from 'react';
import Spoon from '../Spoon';
import Container from '../Container';
import About_Us from '../About_Us';
import ImageWithOverly from '../ImageWithOverly';
import BookNow from '../layer/BookNow';

const Home = () => {
return (
<div>
  <Container>
    <p className='pb-60 text-2xl text-center'>Slider</p>
    <ImageWithOverly src='./src/assets/BG.png'  className='py-[150px]'>
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
   
    <BookNow />

  </Container>
</div>
);
}

export default Home;