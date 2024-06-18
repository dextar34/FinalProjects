import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import Container from './layer/Container';
import Spone from '../assets/Spone.svg'
import Button from './layer/Button';
import BannerImg from "../assets/BannerImg.png"
import BannerImg2 from "../assets/BannerImg2.png"
import BannerImg3 from "../assets/BannerImg3.png"
import Scrollimg from "../assets/Scroll.png"
import { Link } from 'react-router-dom';


const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  let [active,setactive] = useState(0)
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange:(prev , next)=>{
      setactive(next);
    },
    appendDots: dots => (
      <div className=''>
        <ul className='flex gap-2 absolute bottom-0 translate-y-[64px] translate-x-[-41px]'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={i == active ?"text-white font-upright font-semibold text-lg after:w-4 after:h-[2px] after:bg-[#DCCA87] after:absolute relative pr-6 after:right-0 after:top-1/2 after:translate-y-[100%] ":"text-[#F5EFDB] font-upright font-semibold text-lg"
      }>
        0{i + 1}
      </div>
    )
    
  };

    return (
      <div className='pt-12 pb-[216px] bg-black text-white '>
      <div className="fixed z-50 right-[120px] bottom-[152px] cursor-pointer">
        <div onClick={scrollToTop} className="flex justify-center w-[35px]">
        <img className='animate-bounce' src={Scrollimg} alt="" />
        <a href=""></a>
        </div>
        <h3 className='inline-block text-[#DCCA87] font-upright font-bold text-base'>Scroll</h3>
      </div>
      <Container className="flex justify-between items-center">
      <div className=" -rotate-90 flex gap-10">
         <Link>
        <p>#Bar</p>
        </Link>
        <Link>
        <p>#Gericht</p>
        </Link>
      </div>
      <div className="">
        <p className='font-upright bold text-[23px] pb-2 capitalize'>Chase the new Flavour</p>
        <img className='pb-2 animate-pulse	animation:pulse' src={Spone} alt="" />
        <h1 className='pb-8 font-upright bold text-[90px] text-[#DCCA87] max-w-[453px] leading-[130%] capitalize'>The key to Fine dining</h1>
        <p className='text-base text-[#AAAAAA] leading-[175%] max-w-[453px] pb-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <Button text="Explore Menu"/>
      </div>
      
      <div className="w-[667px]">
      <Slider {...settings}>
        <img src={BannerImg} alt="" />
        <img src={BannerImg2} alt="" />
        <img src={BannerImg3} alt="" />
        <img src={BannerImg2} alt="" />
    </Slider>
      </div>
      </Container>
      </div>
    );
}

export default Banner