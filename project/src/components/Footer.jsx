import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import Container from './layer/Container';
import Images from './layer/Images';
import Spoon from './Spoon';
import Geritch from '../assets/Geritch.png'
import Line2 from '../assets/Line2.png'

const Footer = () => {
return (
<footer className="footer mt-[1100px]">
    <Container className="relative">
        <div
            className="Newsletter bg-[#0C0C0C] border border-[#dcca8733] w-[1300px] h-[442px] absolute left-[150px] top-[-33.5%] text-center flex flex-col items-center">
            <div className="ml-[90px]">
                <div className="flex flex-col justify-center items-center ">
                    <h3 className="text-[#FFFFFF] font-Cormorant rant  font-bold text-[23px] text-center mt-[64px] ">
                        Newsletter
                    </h3>
                <Spoon className=''/>
                </div>
                <h1 className="text-[#DCCA87] pb-[24px] font-Cormorant  font-semibold text-[64px] ">Subscribe
                    to Our Newsletter</h1>
                <p className="text-[#FFFFFF] font-Open pb-[64px]">And never miss latest Updates!</p>
            </div>
            <div className="inputfield">
                <form>
                    <input
                        className="lg:w-[635px] w-[300px] py-[8px] lg:pl-[18.94px] pl-[9.94px] bg-transparent border font-Cormorant rant rant  border-[#F5EFDB] lg:py-[16px] text-[#AAAA]"
                        type="email" placeholder="Email Address" />
                    <button
                        className="font-Cormorant rant rant text-base text-[#0C0C0C] font-bold py-[8px] lg:ml-[32px] ml-[16px] px-[32px] bg-[#DCCA87]">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="Scroll absolute right-[0] lg:top-[168px] top-20">
            <Images className="pb-[8px]" href="/" src={Line2} alt="Line.png" />
        </div>
        <div className="text absolute left-[99%] lg:top-[237px] top-32">
            <p className="text-[#DCCA87] font-Cormorant rant  font-bold ">TOP</p>
        </div>
        <div className="flex font-Cormorant rant rant  text-center flex-wrap justify-between">
            <div className="text w-[507px] lg:mt-[374px] mt-[184px]">
                <ul>
                    <h3
                        className='font-Cormorant rant rant  lg:text-[32px] text-[16px] lg:leading-9 leading-5 text-[#F5EFDB] lg:pb-6 pb-3'>
                        Contact Us</h3>
                    <li>
                        <Link to="/">
                        <p className='font-Open lg:text-base text-center text-sm lg:leading-7 leading-5 text-[#AAAAAA]'>
                            9 W 53rd St, New York, NY 10019, USA
                        </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <p
                            className='font-Open lg:text-base text-center mt-[8px] text-sm lg:leading-7 leading-5 text-[#AAAAAA]'>
                            +1 212-344-1230
                        </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <p className='font-Open lg:text-base text-center text-sm lg:leading-7 leading-5 text-[#AAAAAA]'>
                            +1 212-555-1230
                        </p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text w-[507px] lg:mt-[349px] mt-[167]">
                <ul className="flex flex-col items-center">
                    <Images className="lg:pb-8 pb-4" href="/" src={Geritch} alt="Geritch2.png" />
                    <li className="pb-[16px]">
                        <Link to="/">
                        <p className='font-Open text-base leading-7 text-[#AAAAAA]'>"The best way to find yourself is to
                            lose yourself in the <br /> service of others.”</p>
                        </Link>
                    </li>
                    <li>
                        <Spoon />
                    </li>
                    <li className="text-[#F5EFDB] flex gap-x-[16px] pt-[16px]">
                        <Link to="/">
                        <FaFacebookF />
                        </Link>

                        <Link to="/">
                        <TfiTwitter />
                        </Link>

                        <Link to="/">
                        <FaInstagram />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text w-[507px] mt-[374px] ">
                <h3 className='text-[25px]  font-Cormorant   leading-9  text-[#F5EFDB] pb-6 '>
                    Working Hours</h3>
                <ul>
                    <li>
                        <Link>
                        <p className=' text-base leading-7 text-[#AAAAAA]'>Monday-Friday: <br />
                            08:00 am -12:00 am</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                        <p className='font-Open text-base leading-7 mt-[8px] text-[#AAAAAA]'>Saturday-Sunday: <br />
                            07:00am -11:00 pm</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="copyright font-Open lg:pt-[80px] pt-[40px] flex justify-center text-center">
            <p className="text-[#AAAAAA]">2021 Gerícht. All Rights reserved.</p>
        </div>
    </Container>
</footer>
)
}

export default Footer