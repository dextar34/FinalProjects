import React from 'react';
import Gril from '../../assets/gril.jpg'
import lemon from '../../assets/lemon.png'
import salad from '../../assets/salad.jpg'
import shape from '../../assets/BlogShape.png'
import Blog_card from './Blog_card';
import RotetSpons from '../../components/layer/RotateSpoon';
import Container from '../Container';
import Button from '../Button';
import SearchBlog from './SearchBlog';

const With_Sidebar = () => {
  return (
    <Container className='!max-w-[1698px] pt-20'>
    <div className=' top text-white items-center  flex justify-end'>
    <div className='flex'>
    <div className='work_part max-w-[856px]  mr-[69px]  '>
   <div className='flex flex-wrap items-center gap-x-8 gap-y-16'>
   <Blog_card extraClass="hover:underline" href='/our/blogs-/single/column' src={Gril} date='16 Apr 2021' shape='- Annalisa L' heading='tips for prepping and caring for your grill' to='#' more=' -Read More'/>
   <Blog_card extraClass="hover:underline" href='#' src={lemon} date='23 May 2021' shape='-John Micheal' heading='summer cocktails and mocktails' to='#' more=' Read More'/>
   <Blog_card extraClass="hover:underline" href='#' src={salad} date='06 Mar 2020' shape='- Andrial M' heading='How to make your food Photographs look aesthetic' to='#' more=' Read More'/>
   <Blog_card extraClass="hover:underline" href='#' src={shape} date='17 June 2018' shape='-Kaityln B' heading='Co-ordination & Teamwork Tips from a sous chef' to='#' more=' Read More'/>
   </div>
   <div className=' flex items-center justify-center mt-[72px] mb-[27px]'>
   <Button text='View More'/>
   </div>
    </div>
   <SearchBlog/>
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
