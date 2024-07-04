import React from 'react';
import Container from '../layer/Container';
import Blog_card from '../layer/Blog_card';
import StakeLarge from '../../../public/StakeLarge.jpg';
import JuceLarge from '../../../public/JuceLarge.jpg';
import SearchBlog from '../layer/SearchBlog';
import BreadCrumb from '../../components/layer/Bredcum';
import RotateSpoon from '../layer/RotateSpoon';
import Button from '../Button';

const Blog2 = () => {
  return (
    <div>
        <BreadCrumb text='Our Blogs'/>
        <Container className="py-[152px]">
        <div className='flex items-center justify-end'>
        <div className='flex  gap-x-[69px]'>
        <div className='flex flex-col gap-y-16'>
        <Blog_card className="!max-w-[856px]" href='#' src={StakeLarge} alt="../layer/SearchBlog" date='16 Apr 2021' shape='- Annalisa L' heading='tips for prepping and caring for your grill' to='#' more=' -Read More'/>
        <Blog_card className="!max-w-[856px]" href='#' src={JuceLarge} alt="../../../public/JuceLarge.jpg" date='23 May 2021' shape='-John Micheal' heading='summer cocktails and mocktails' to='#' more=' Read More'/>
        <div className=' flex items-center justify-center mt-16 mb-[27px]'>
            <Button text='View More'/>
        </div>
        </div>
       
        <SearchBlog/>
        </div>
        <div className='rotetSpons pl-[93px]'>
            <RotateSpoon/>
            </div>
        </div>
        <div className=' bottom mt-[29px]'>
      <RotateSpoon/>
            </div>
    </Container>
    </div>
  );
}

export default Blog2;
