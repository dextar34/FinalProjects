import React from 'react'
import Container from './Container'
import Spoon from './Spoon'



const Award = () => {
  return (
   <>
   <Container>
    <div className="main w-[1300px] mx-auto flex justify-between">
        <div className="left w-[634px] py-[118px]">
        <div className='text'>
        <h3 className='font-Cormorant text-[#FFFFFF] text-[23px] font-bold'>Awards & recognition</h3>
        <Spoon />
        <h2 className='font-Cormorant text-[64px] text-[#DCCA87] font-semibold pt-8'>Our Laurels</h2>
        </div>
        <div className="rectangle flex flex-wrap gap-x-8 gap-y-16 mt-16 my-32 ">
            <div className="img flex">
                <img className='pr-8 w-20 h-[60px]'  src="./src/assets/One.png" alt="" />
                <div className="text2 w-36">
                    <h4 className='font-Cormorant text-[#DCCA87] font-bold text-[23px]'>Bib Gourmond</h4>
                    <p className='text-[#AAAAAA] text-xs leading-7'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
            <div className="img1 flex">
                <img className='pr-8 w-20 h-[60px]'  src="./src/assets/Two.png" alt="" />
                <div className="text2 w-36">
                    <h4 className='font-Cormorant text-[#DCCA87] font-bold text-[23px]'>Rising Star</h4>
                    <p className='text-[#AAAAAA] text-xs leading-7'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
            <div className="img2 flex">
                <img className='pr-8 w-20 h-[60px]'  src="./src/assets/Three.png" alt="" />
                <div className="text2 w-36">
                    <h4 className='font-Cormorant text-[#DCCA87] font-bold text-[23px]'>AA Hospitality </h4>
                    <p className='text-[#AAAAAA] text-xs leading-7'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
            <div className="img3 flex">
                <img className='pr-8 w-20 h-[60px]'  src="./src/assets/Five.png" alt="" />
                <div className="text2 w-36">
                    <h4 className='font-Cormorant text-[#DCCA87] font-bold text-[23px] leading-7'>Outstanding Chef</h4>
                    <p className='text-[#AAAAAA] text-xs leading-7'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
        </div>
        </div>
        <div className="right">
          
            <img className='' src="./src/assets/double.png" alt="" />
       </div>
    </div>
    </Container>
   </>
  )
}

export default Award
