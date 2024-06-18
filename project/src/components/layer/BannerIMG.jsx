import React from 'react'
import Banner_img_1 from '../../assets/Banner_img_1.jpg'
const BannerIMG = () => {
  return (
    <div className='relative w-[620px] h-[736px]'>
    <div className="!w-[435px] !h-[435px] bg-[#DCCA87] mt-[301px] absolute  top-0 translate-x-[-24px] z-10 translate-y-[-24px]"></div>
      <div className="!w-[435px] !h-[435px] bg-[#DCCA87] absolute right-0  top-0 translate-x-[24px] translate-y-[-24px] z-10"></div>
      <div className="absolute z-50">
      <img className='' src={Banner_img_1} alt="" />
    </div>
  </div>
  )
}

export default BannerIMG