import React from 'react'
import BG2 from "../../assets/BG2.png"
import err from "../../assets/404.png"
import White_Spoon from "../../assets/White_Spoon.png"
import ImageWithOverly from '../ImageWithOverly'
import Button from '../Button'
import { Link } from 'react-router-dom'
import RotateSpoon from '../layer/RotateSpoon'
import Nav from '../Nav'
const Error = () => {
  return (
       <div className="">
         <Nav/>
    <div className='relative'>
        <ImageWithOverly className="flex justify-between items-center " src={BG2}>
            <div className="flex justify-center items-center flex-col gap-8 relative w-full h-full">
                <div>
                <img src={err} alt="" />
                <img className='mx-auto mt-4' src={White_Spoon} alt="" />
                </div>
                <p className='w-[610px] text-center text-white text-[23px] font-Cormorant font-bold'>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                <Link to="/"><Button text="Back To Home"/></Link>
            </div>
        </ImageWithOverly>
                <RotateSpoon className="absolute bottom-[90px] left-[250px]"/>
                <RotateSpoon className="absolute top-[90px] right-[250px]"/>
    </div>
       </div>
  )
}

export default Error