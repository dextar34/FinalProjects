import React from 'react'
import BreadCrumb from "../../components/layer/Bredcum"
import Container from '../Container'
import ImageWithOverly from '../ImageWithOverly'
import BG from "../../assets/BG.jpg"
import double from "../../assets/double.png"
import Button from '../Button'
const Contact = () => {
  return (
    <div>
        <BreadCrumb text='Contact Us'/>
        <Container>
        <iframe className='outline-none lg:h-[572px] md:h-[550px] sm:h-[450px] h-[350px] w-full border border-[#DCCA87]  lg:my-[140px] md:my-[100px] sm:my-[50px] my-[30px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3975543695287!2d90.38119147396944!3d23.73319858943912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57dd8b19%3A0xd66f294182e721e8!2sDhaka%20New%20Market!5e0!3m2!1sen!2sbd!4v1714729408766!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Container>
        <ImageWithOverly className="py-[140px]" src={BG}>
            <div className="flex justify-between items-center">
            <div className="">
            <div className="flex flex-col gap-8 mb-8">
                <input type="text" className='border border-[#F5EFDB] bg-transparent py-4 px-5 w-[635px] outline-none placeholder:text-[#F5EFDB] placeholder:font-Cormorant text-[#F5EFDB] font-Cormorant' placeholder='Full Name'/>
                <input type="mail" className='border border-[#F5EFDB] bg-transparent py-4 px-5 w-[635px] outline-none placeholder:text-[#F5EFDB] placeholder:font-Cormorant text-[#F5EFDB] font-Cormorant' placeholder='Email Address'/>
                <textarea className='border border-[#F5EFDB] bg-transparent py-4 px-5 w-[635px] outline-none placeholder:text-[#F5EFDB] placeholder:font-Cormorant text-[#F5EFDB] font-Cormorant'  name="" id="" placeholder='Message'></textarea>
            </div>
                <Button text="Subscribe"/>
            </div>
            <div className="">
                <img src={double} alt="" />
            </div>
            </div>
        </ImageWithOverly>
    </div>
  )
}

export default Contact