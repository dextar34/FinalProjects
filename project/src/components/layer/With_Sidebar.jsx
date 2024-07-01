import React from 'react';
import Gril from '../../assets/gril.jpg'
import lemon from '../../assets/lemon.png'
import salad from '../../assets/salad.jpg'
import shape from '../../assets/BlogShape.png'
import Blog_card from './Blog_card';
import { IoIosSearch } from "react-icons/io";
import Title from './Title';
import RotetSpons from '../../components/layer/RotateSpoon';
import Container from '../Container';
import { BsDashLg } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';
import Button from '../Button';
import { Link } from 'react-router-dom';

const With_Sidebar = () => {
  return (
    <Container className='!max-w-[1698px] pt-20'>
    <div className=' top text-white items-center  flex justify-end'>
    <div className='flex'>
    <div className='work_part max-w-[856px]  mr-[69px]  '>
   <div className='flex flex-wrap items-center gap-x-8 gap-y-16'>
   <Blog_card href='#' src={Gril} date='16 Apr 2021' shape='- Annalisa L' heading='tips for prepping and caring for your grill' to='#' more=' -Read More'/>
   <Blog_card href='#' src={lemon} date='23 May 2021' shape='-John Micheal' heading='summer cocktails and mocktails' to='#' more=' Read More'/>
   <Blog_card href='#' src={salad} date='06 Mar 2020' shape='- Andrial M' heading='How to make your food Photographs look aesthetic' to='#' more=' Read More'/>
   <Blog_card href='#' src={shape} date='17 June 2018' shape='-Kaityln B' heading='Co-ordination & Teamwork Tips from a sous chef' to='#' more=' Read More'/>
   </div>
   <div className=' flex items-center justify-center mt-[72px] mb-[27px]'>
   <Button text='View More'/>
   </div>
    </div>
    <div className='Search max-w-[375px] flex flex-col gap-y-8'>
   <div className='flex flex-col  p-8  bg-[#242424]'>
     <label htmlFor='name' className='text-[#DCCA87] text-[32px] tracking-[1.28px] font-Cormorant bg-transparent pb-6'>Search Page</label>
     <div className='bg-transparent relative'>
       <input type='text' className='outline-none placeholder:text-[#AAAAAA] placeholder:text-base placeholder:font-Open placeholder:tracking-[0.64px] bg-transparent' id='name' placeholder='Example'/>
     <IoIosSearch className='bg-transparent absolute top-1/2 right-0 translate-y-[-50%]'/></div>
   </div>

 <div className='catagory bg-[#242424]  p-8 '>
   <Title className='pb-6' text='Our Latest Posts bg-transparent'/>
   <div className='flex items-center justify-between text-base text-[#AAAAAA] font-Open tracking-[0.64px] bg-transparent'>
     <h3 className='bg-transparent w-[103px]'>Photography</h3>
     <div className='border border-[#FAFAFA] w-[159px]'></div>
     <p className='bg-transparent'>(1)</p>
   </div>
   <div className='flex items-center justify-between text-base text-[#AAAAAA] font-Open tracking-[0.64px] bg-transparent py-8'>
     <h3 className='bg-transparent w-[103px]'>Baking</h3>
     <div className='border border-[#FAFAFA] w-[159px]'></div>
     <p className='bg-transparent'>(2)</p>
   </div>
   <div className='flex items-center justify-between text-base text-[#AAAAAA] font-Open tracking-[0.64px] bg-transparent'>
     <h3 className='bg-transparent w-[103px]'>Cooking Tips</h3>
     <div className='border border-[#FAFAFA] w-[159px]'></div>
     <p className='bg-transparent'>(6)</p>
   </div>
 </div>
 <div className='catagory bg-[#242424]  p-8 '>
   <Title className='pb-6' text='Our Latest Posts'/>
 <Blog_card className='bg-transparent' href='#' src={lemon} date='23 May 2021' shape='-John Micheal' heading='summer cocktails and mocktails' to='#' more=' Read More'/>
 </div>

 <div className='catagory bg-[#242424]  p-8 '>
   <Title className='pb-6' text='Related Tags'/>
   <div className='flex items-center bg-transparent gap-x-2 text-base font-Open text-[#AAAAAA]'>
   <p className='bg-transparent'>Grilling</p>
   <BsDashLg className='bg-transparent' />
   <p className='bg-transparent'>Cooking</p>
   <BsDashLg className='bg-transparent' />
   <p className='bg-transparent'>Baking</p>
   </div>
   <div className='flex items-center bg-transparent gap-x-2 text-base font-Open text-[#AAAAAA] mt-4'>
   <p className='bg-transparent'>Cuisines</p>
   <BsDashLg className='bg-transparent' />
   <p className='bg-transparent'>Chef</p>
   <BsDashLg className='bg-transparent' />
   <p className='bg-transparent'>Alcohol Mixing</p>
   </div>
 </div>

 <div className='catagory bg-[#242424]  p-8 '>
   <Title className='pb-6' text='Share'/>
   <div className='bg-transparent flex items-center gap-x-4 text-[#F5EFDB] '>
   <Link className='bg-transparent' to='#'>
   <FaFacebookF className='bg-transparent w-6 h-6 hover:text-[#DCCA87] transition-all duration-300' />
   </Link>
    <Link className='bg-transparent' to='#'>
    <SlSocialTwitter className='bg-transparent w-6 h-6 hover:text-[#DCCA87] transition-all duration-300' />
   </Link>
   <Link className='bg-transparent' to='#'>
   <FaInstagram className='bg-transparent w-6 h-6 hover:text-[#DCCA87] transition-all duration-300' />
   </Link>
   </div>
 </div>

    </div>
    </div>
    <div className='rotetSpons pl-[93px]'>
   <RotetSpons/>
    </div>
    </div>
    <div className=' bottom mt-[29px]'>
      <RotetSpons/>
    </div>

    </Container>
  );
}

export default With_Sidebar;
