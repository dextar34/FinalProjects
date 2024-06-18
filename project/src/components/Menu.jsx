import React from 'react'
import MenuItems from './MenuItems'
import menu from '../assets/menu.jpg'
import Headding from './Headding'

const Menu = () => {
  return (
    <div className=' p-10 text-white px-16'>
      <div className="flex items-center justify-center gap-x-8 ">
        <div className="">
            <Headding text='Wine & Beer' modify='text-white pb-12 text-[46px]'/>
            <div className="">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
            </div>
        </div>
        <div className="">
            <img src={menu} alt="happy" />
        </div>
        <div className="">
        <Headding text='Wine & Beer' modify='text-white pb-12 text-[46px]'/>
            <div className="">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
