import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import ImageWithOverly from '../ImageWithOverly'
import services_brancum_img from "../../assets/services_brancum_img.png"
const BreadCum2 = ({text}) => {
  return (
    <ImageWithOverly className="flex flex-col justify-center items-center" src={services_brancum_img}>
    <div className="flex flex-col justify-center items-center">
      <h2 className='text-[128px] font-Cormorant font-semibold text-[#DCCA87]'>{text}</h2>
      <p className='text-white text-[32px] font-Cormorant capitalize font-bold flex items-center'>
        Home <FaAngleRight className='text-[#DCCA87]' /> Our Blogs- grid <FaAngleRight className='text-[#DCCA87]' /> Cooking Tips <FaAngleRight className='text-[#DCCA87]' />
        <span className='mr-2'>{window.location.pathname.split("/")[1]}</span>
      <span className='mr-2'>{window.location.pathname.split("/")[2]}</span>
      <span className='mr-2'>{window.location.pathname.split("/")[3]}</span>
      <span className='mr-2'>{window.location.pathname.split("/")[4]}</span>
      <span className='mr-2'>{window.location.pathname.split("/")[5]}</span>
      <span className='mr-2'>{window.location.pathname.split("/")[6]}</span>
      <span className='mr-2'>{window.location.pathname.split("/")[7]}</span>
      <span className='mr-2'>{window.location.pathname.split("/")[8]}</span>
      </p>
    </div>
  </ImageWithOverly>
  )
}

export default BreadCum2