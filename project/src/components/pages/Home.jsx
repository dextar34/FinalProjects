import React from 'react';
import About_Us from '../About_Us';
import ImageWithOverly from '../ImageWithOverly';
import BookNow from '../layer/BookNow';
import RotateSpoon from '../layer/RotateSpoon';
import Award from '../Award';
import Banner from "../Banner";
import Barmenu from '../layer/Barmenu';
import Chef from '../Chef';
import Blogs from '../Blogs';
import Photogallery from '../Photogallery';
import BG from "../../assets/BG.png"
import knife from "../../assets/knife.png"
const Home = () => {
return (
<div>
    <Banner/>
    <div className="pb-[150px]">
      <ImageWithOverly value="h-[959px]" src={BG} className='py-[150px] '>
        <div className=" relative z-50 flex gap-x-20 items-center mx-[210px] pb-40">
          <About_Us className='rotate-180' txt='About Us' direction='items-end' txtAaling='text-end' />
            <img src={knife} alt="" />
          <About_Us txt='Our History' className='' direction='items-start' txtAaling='text-start' />
        </div>
        <picture className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-9'>
          <img src="./src/assets/G.png" alt="./src/assets/G.png" />
        </picture>
      </ImageWithOverly>
     
    </div>

    <div className="text-white font-Cormorant pb-40 relative ">
      <Barmenu/>
      <RotateSpoon className='absolute top-[32px] left-[145px]' />
    </div>

    <BookNow />

    <Chef/>
    <Award/>
    <Blogs/>
    <Photogallery/>
</div>
);
}

export default Home;