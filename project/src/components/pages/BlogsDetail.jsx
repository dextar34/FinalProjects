import React from 'react';
import BreadCum2 from '../layer/BreadCum2';
import Container from '../Container';
import StakeBanner from '../../../public/StakeBanner.png'
import { GoDash } from "react-icons/go";
import video from "../../../public/StakeVideo.mp4"
import comma1 from "../../assets/“1.png"
import comma2 from "../../assets/“2.png"
import GrilInstrument from "../../../public/GreelSqure.jpg"
import { VscComment } from "react-icons/vsc";
import List from '../layer/List';
import { FaRegHeart } from "react-icons/fa";
import SearchBlog from '../layer/SearchBlog';
import RotateSpoon from '../layer/RotateSpoon';
import CommentImage1 from '../../../public/CommentImage1.png';
import CommentImage2 from '../../../public/CommentImage2.jpg';
import CommentImage3 from '../../../public/CommentImage3.jpg';
import CommentCard from '../layer/CommentCard';
import Button from '../Button';

const BlogsDetail = () => {
  return (
    <div className='text-white'>
      <BreadCum2 text='Our Blogs'/>
      <Container className="py-[152px] relative">
        <div className='flex items-center justify-end gap-x-[83px]' >
        <div className='w-[1300px]'>
          <div className='name flex justify-between items-center'>
            <p className='text-[#FAFAFA] text-base font-Open tracking-[0.64px]'>16 Apr 2021</p>
            <p className='text-[#FAFAFA] text-base font-Open tracking-[0.64px]'>- Annalisa L</p>
          </div>
          <div>
            <h2 className='text-[#DCCA87] text-[64px] font-Cormorant font-semibold tracking-[1.92px] capitalize mt-6 mb-10'>tips for prepping and caring for your grill</h2>
            <div className='image w-[1300px] h-[430px]'>
              <img className='w-full' src={StakeBanner}/>
            </div>
          </div>

          <div className='mt-10 mb-[152px] flex gap-x-[69px]'>
          <div className='details w-[856px]'>
            <p className='text-[#AAAAAA] text-base font-Open leading-7 tracking-[0.64px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>
            <h3 className='text-[#DCCA87] text-6 font-Cormorant font-bold tracking-[0.64px]'>How to prepare your grill</h3>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 py-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
            </p>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 flex items-center gap-x-2'>
            <GoDash /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 flex items-center gap-x-2 py-6'>
            <GoDash />  Tincidunt pharetra ut lobortis id.
            </p>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 flex items-center gap-x-2'>
            <GoDash /> Commodo sit libero lacus a egestas penatibus pretium quis lorem. 
            </p>
            <div className=' py-10'>
            <video src={video} controls>
            </video>
            </div>
            <p className='text-[#AAAAAA] text-base font-Open leading-7 tracking-[0.64px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>

            <div className='border border-[#DCCA87] bg-[#545454] relative'>
              <img className='absolute top-0 left-4' src={comma1}/>
              <p className='text-[32px] text-[#FFFFFF] font-Cormorant tracking-[0.64px] px-24 py-[73px]'>There is no love sincerer than the love of food.</p>
             <img className='absolute right-4 bottom-0' src={comma2}/>
            </div>

            <div className='my-10 flex justify-between'>
            <div className='w-[523px]'>
            <h3 className='text-[#DCCA87] text-6 font-Cormorant font-bold tracking-[0.64px]'>How to prepare your grill</h3>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 py-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tin cidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem.
            </p>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 flex items-center gap-x-2'>
            <GoDash /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 flex items-center gap-x-2 py-6'>
            <GoDash />  Tincidunt pharetra ut lobortis id.
            </p>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 flex items-center gap-x-2'>
            <GoDash /> Commodo sit libero lacus a egestas penatibus. 
            </p>
            </div>
            <div className='w-[301px] h-[301px]'>
              <img className='w-full' src={GrilInstrument} alt="public/GreelSqure.jpg"/>
            </div>

            </div>
            <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 mt-10 mb-[56px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>

            <div className='flex items-center justify-between'>
              <div className='text flex items-center gap-x-4'>
                <p className='text-[#C4C4C4] text-base font-Open tracking-[0.64px] leading-7'>#Grilling</p>
                <p className='text-[#C4C4C4] text-base font-Open tracking-[0.64px] leading-7'>#Outdoors</p>
                <p className='text-[#C4C4C4] text-base font-Open tracking-[0.64px] leading-7'>#Cooking</p>
              </div>
              <div className='icon flex items-center gap-x-8'>
              <div className='flex items-center gap-x-4'>
              <VscComment className='text-[#DCCA87]' />
                <ul><List className='text-[#FFFFFF] text-base font-Open tracking-[0.64px]' to='' text="Comment"/></ul>
              </div>

              <div className='flex items-center gap-x-4'>
              <FaRegHeart className='text-[#DCCA87]' />
                <ul><List className='text-[#FFFFFF] text-base font-Open tracking-[0.64px]' to='' text="Like"/></ul>
              </div>
              </div>
            </div>
          </div>
          <div >
            <SearchBlog/>
          </div>
          </div>
          <div>
          <h2 className='text-[#DCCA87] text-[32px] font-Cormorant tracking-[0.64px] mb-8'>Comment(3)</h2>
          <CommentCard extraClassName="mr-[593px]" pragraphWith="max-w-[635px]" src={CommentImage1} alt="public/CommentImage1.jpg" name="Nora Martin" date="01 Dec 2020" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt nulla non tincidunt." />

          <CommentCard extraClassName="mr-[457px]" pragraphWith="max-w-[593px]" className="pl-[121px] mt-8 mb-12" src={CommentImage2} alt="public/CommentImage2.jpg" name="Lara Williams" date="05 Dec 2020" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt nulla non tincidunt." />

          <CommentCard extraClassName="mr-[601px]" pragraphWith="max-w-[635px]" src={CommentImage3} alt="public/CommentImage3.jpg" name="Jane Cooper" date="05 Dec 2020" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut." />
        </div>
        <div className='pl-[174px]'>
        <div className='flex items-center gap-x-8'>
          <p className='text-[#FFFFFF] text-base font-Open tracking-[0.64px] cursor-pointer'>Reply to Nora Martin</p>
          <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] cursor-pointer my-4'>Cancel Reply</p>
        </div>
        <textarea rows='' cols='' placeholder='Hi there! I love your blog....' className='w-[635px] h-[140px] bg-transparent outline-none border border-[#F5EFDB] placeholder:text-[#AAAAAA] placeholder:text-base placeholder:font-semibold placeholder:font-Cormorant pt-4 pl-[18px] block tracking-[0.64px]'/>
        <Button text="Submit" className="w-200px mt-4"/>
        </div>
        <div className='flex items-center gap-x-[452px]'>
          <div className='mt-[152px]'>
            <h2 className='text-[#DCCA87] text-[32px] font-Cormorant tracking-[0.64px]'>Post a Comment</h2>
            <textarea rows='' cols='' placeholder='Hello There, My message...' className='w-[635px] h-[140px] bg-transparent outline-none border border-[#F5EFDB] placeholder:text-[#AAAAAA] placeholder:text-base placeholder:font-semibold placeholder:font-Cormorant pt-4 pl-[18px] block tracking-[0.64px] mt-10 mb-12'/>
            <div className='flex items-center gap-x-8'>
              <input type='text' className='py-4 px-[18px] outline-none bg-transparent border border-[#F5EFDB] w-[301px] placeholder:text-[#AAAAAA] placeholder:text-base placeholder:font-semibold placeholder:font-Cormorant tracking-[0.64px]' placeholder='First Name' />
              <input type='text' className='py-4 px-[18px] outline-none bg-transparent border border-[#F5EFDB] w-[301px] placeholder:text-[#AAAAAA] placeholder:text-base placeholder:font-semibold placeholder:font-Cormorant tracking-[0.64px]' placeholder='Last Name' />
            </div>
            <div className='py-12'>
            <input className='mr-2 text-[#DCCA87]' type="checkbox" id="save"/>
            <label className='text-[#AAAAAA] text-base font-Open tracking-[0.64px]'  htmlFor='save'>Save my name and email in this browser for the next time I comment.</label>
            </div>
            <Button text="Submit" className="w-200px"/>
          </div>
          <div>
          <RotateSpoon />
          </div>
        </div>
        </div>
        <RotateSpoon />
        </div>
        <div className='spoon absolute left-0 bottom-[792px]'>
          <RotateSpoon/>
          </div>
      </Container>
    </div>
  );
}

export default BlogsDetail;
