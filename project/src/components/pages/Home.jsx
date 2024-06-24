import React from 'react';
import Spoon from '../Spoon';
import Container from '../Container';
import About_Us from '../About_Us';
import ImageWithOverly from '../ImageWithOverly';
import BookNow from '../layer/BookNow';
import RotateSpoon from '../layer/RotateSpoon';
import Banner from "../Banner"
import { Link } from 'react-router-dom';
const Home = () => {
return (
<div>
  <div className="h-50 relative">
  <Banner/>
  </div>
  <div className="pb-[150px]">
      <ImageWithOverly src='./src/assets/BG.png' className='py-[150px] w-full' classNameForImg="w-full">
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
  <Container>

    <div className="text-white font-Cormorant pb-40 relative ">
      <ImageWithOverly src='./src/assets/glass.png'>
        <div className="absolute top-[293px] left-[145px]">
          <ul className='flex flex-col gap-y-16'>
            <Link>
            <h4 className='font-semibold text-6xl hover:underline transition-all duration-3000'>Bar Menu</h4>
            </Link>
            <Link>
            <h4 className='font-semibold text-6xl hover:underline transition-all duration-3000'>Food Menu</h4>
            </Link>
            <Link>
            <h4 className='font-semibold text-6xl hover:underline transition-all duration-3000'>Desserts Menu</h4>
            </Link>
            
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