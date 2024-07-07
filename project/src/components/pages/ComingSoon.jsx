import React from 'react'
import Spoon from "../../assets/spoon.png"
import BG2 from "../../assets/BG2.png"
import { Link } from 'react-router-dom'
import ImageWithOverly from '../ImageWithOverly'
import RotateSpoon from '../layer/RotateSpoon'
import Button from '../Button'
const ComingSoon = () => {
  return (
<div className='relative'>
        <ImageWithOverly className="flex justify-between items-center " src={BG2}>
            <div className="flex justify-center items-center flex-col gap-8 relative w-full h-full">
                <div>
                <h2 className='text-[#DCCA87] text-[90px] font-Cormorant font-bold'>Coming Soon</h2>
                <img className='mx-auto mt-4' src={Spoon} alt="" />
                </div>
                <p className='w-[741px] text-center text-white text-base font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique feugiat orci tristique bibendum sollicitudin at aliquam. Nulla varius augue eu orci vel.</p>
                <div className="flex justify-between w-[916px]">
                    <div className="flex flex-col items-center">
                        <h4 className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold'>12</h4>
                        <p className='text-[#AAAAAA] text-[23px] font-Cormorant font-bold'>Months</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold'>32</h4>
                        <p className='text-[#AAAAAA] text-[23px] font-Cormorant font-bold'>Days</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold'>11</h4>
                        <p className='text-[#AAAAAA] text-[23px] font-Cormorant font-bold'>Hours</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold'>52</h4>
                        <p className='text-[#AAAAAA] text-[23px] font-Cormorant font-bold'>Minutes</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold'>34</h4>
                        <p className='text-[#AAAAAA] text-[23px] font-Cormorant font-bold'>Seconds</p>
                    </div>
                </div>
                <Link to="/"><Button text="Back To Home"/></Link>
            </div>
        </ImageWithOverly>
                <RotateSpoon className="absolute bottom-[90px] left-[250px]"/>
                <RotateSpoon className="absolute top-[90px] right-[250px]"/>
    </div>
  )
}

export default ComingSoon