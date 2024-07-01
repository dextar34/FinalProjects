import React from 'react'
import ImageWithOverly from '../ImageWithOverly'
import List from './List'
import glass_img from "../../assets/glass.png"
const Barmenu = () => {
  return (
    <ImageWithOverly src={glass_img}>
    <div className="absolute top-[293px] left-[145px]">
      <ul className='flex flex-col gap-y-16'>
        <List text='Bar Menu' className='font-semibold text-6xl hover:underline transition-all duration-500' />
        <List text='Food Menu' className='font-semibold text-6xl hover:underline transition-all duration-500' />
        <List text='Desserts Menu' className='font-semibold text-6xl hover:underline transition-all duration-500' />
      </ul>

    </div>
  </ImageWithOverly>
  )
}

export default Barmenu