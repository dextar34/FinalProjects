import React from 'react'
import Container from './layer/Container'
import Image from '../components/layer/Images'
import spoon from '../assets/spoon.png'
import fork from '../assets/fork.png'
import Button from './Button'
import pg1 from '../assets/pg1.jpg'
import pg2 from '../assets/pg2.jpg'
import pg3 from '../assets/pg3.jpg'
import pg4 from '../assets/pg4.jpg'
import pg5 from '../assets/pg5.jpg'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Photogallery = () => {
    console.log("Hello");
    var settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='bg-bg-img object-cover z-10 h-[70vh] flex gap-x-16 overflow-hidden'>
        <Container className="flex items-center justify-center">
            <div className='w-[491px] flex flex-col justify-center ml-[190px] '>
                <p className='text-[#fff] text-[23px] font-CU font-bold leading-[30px]'>Instagram</p>
                <p className='flex gap-x-2 my-2'>
                    <span>
                        <Image className="rotate-180 
                        " src={fork}/>
                    </span>
                    <span>
                        <Image src={spoon}/>
                    </span>
                </p>
                <h5 className='text-[#DCCA87] text-[64px] leading-[84px] font-semibold font-CU tracking-[1.92px]'>Photo Gallery</h5>
                <p className='text-[#aaa] text-base leading-7 font-OS my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <Button className="w-[136px]" text="View More"/>
            </div>



        </Container>
        <div className='flex justify-center items-center gap-x-8'>
            
            <Slider {...settings}>        
                <img src={pg1} className='w-[200px] h-[200px] object-cover' alt="" />
                <img src={pg2} className='w-[200px] h-[200px] object-cover' alt="" />
                <img src={pg3} className='w-[200px] h-[200px] object-cover' alt="" />
                <img src={pg4} className='w-[200px] h-[200px] object-cover' alt="" />
            {/* <div className=" w-[295px] h-[450px] ">
            </div>    
            <div className=" w-[295px] h-[450px] ">
            <Image src={pg2} alt="Image" className="w-full h-full object-cover "/> 
            </div>            
            <div className=" w-[295px] h-[450px]">
            <Image src={pg3} alt="Image" className="w-full h-full object-cover"/>  
            </div>            
            <div className=" w-[295px] h-[450px]">
            <Image src={pg4} alt="Image" className="w-full h-full object-cover"/>
            </div>            
            <div className=" w-[295px] h-[450px]">
            <Image src={pg5} alt="Image" className="w-full h-full object-cover"/>
            </div>            
            <div className=" w-[295px] h-[450px]">
            <Image src={pg1} alt="Image" className="w-full h-full object-cover"/>  
            </div> */}
            </Slider>
        </div>        
         </div>
        
        
  )
}

export default Photogallery