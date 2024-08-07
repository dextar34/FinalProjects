import React, { useEffect, useState } from 'react'
// import { FaBars } from "react-icons/fa";
import Container from './layer/Container';
import Images from './layer/Images';
import List from './layer/List';
import Geritch from '../assets/Geritch.png'
import Line from '../assets/Line.png'

const Nav = () => {

 

  return (
    <nav id="Nav" className=" bg-[#0C0B08] py-7 ">
      <Container className="flex items-center  justify-between relative">
              <div className="logo">
                    <Images href="/" src={Geritch} alt="Geritch.png"/>
              </div>           
                <div className={` py-8  w-auto   bg-[#0C0B08]  flex justify-center `}>
                <ul className="flex items-center justify-center  w-auto gap-y-2 gap-x-[32px]">
                    <List className="hover:text-[#DCCA87] duration-300" href="/" text="Home" />
                    <List className="hover:text-[#DCCA87] duration-300" href="/" text="Pages" />
                    <List className="hover:text-[#DCCA87] duration-300" href="/Contact/Us" text="Contact us" />
                    <List className="hover:text-[#DCCA87] duration-300" href="/our/blogs-/with/sidebar" text="Blog" />
                    <List className="hover:text-[#DCCA87] duration-300" href="/" text="Landing" />
                </ul>
               </div>
                <div className="Login flex justify-end text-[#FFF] text-base items-center  font-semibold cursor-pointer w-auto">
                  <p><span className='hover:text-[#DCCA87] duration-300'>Log in</span> / <span className='hover:text-[#DCCA87] duration-300'>registration</span></p>
                  <Images className="px-10 " href="/" src={Line} alt="Line.png"/>
                  <p className='hover:text-[#DCCA87] duration-300'>Book Table</p>
               </div>
            

      </Container>
    </nav>
  )
}

export default Nav
