import React from 'react'
import Button from '../Button'
import Spoon from '../Spoon'

const BookNow = ({className}) => {
return (
<div className={`${className}`}>
    <div className="container max-w-[1680px] mx-auto py-10">
        <div className="main max-w-[1364px] bg-[#0C0C0C] mx-auto  py-12   border-[#363225] border">

            <div className="text w-[350px] mx-auto flex flex-col  justify-center items-center">
                <h3 className='font-Cormorant text-[23px] font-bold text-[#FFFFFF]'>Reservations</h3>
                <Spoon />
                <h2 className='text-[#DCCA87] font-Cormorant text-[64px] font-semibold'>Book A Table</h2>
            </div>

            <div className="seltag my-16 flex justify-around">
                <select
                    className='w-[412px] outline-none bg-transparent text-white border border-inherit font-cormo p-4 text-xl font-semibold'
                    name="" id="">
                    <option className=' bg-slate-500' value="1">1 person</option>
                    <option className=' bg-slate-500' value="1">2 person</option>
                    <option className=' bg-slate-500' value="1">3 person</option>
                    <option className=' bg-slate-500' value="1">4 person</option>
                    <option className=' bg-slate-500' value="1">5 person</option>
                    <option className=' bg-slate-500' value="1">6 person</option>
                </select>

                <select
                    className='w-[412px] outline-none bg-transparent text-white border border-inherit font-cormo p-4 text-xl font-semibold'
                    name="" id="">
                    <option className=' bg-slate-500' value="">12/05/2021</option>
                    <option className=' bg-slate-500' value="">13/05/2021</option>
                    <option className=' bg-slate-500' value="">14/05/2021</option>
                    <option className=' bg-slate-500' value="">15/05/2021</option>
                    <option className=' bg-slate-500' value="">16/05/2021</option>
                    <option className=' bg-slate-500' value="">17/05/2021</option>
                </select>

                <select
                    className='w-[412px] outline-none bg-transparent text-white border border-inherit font-cormo p-4 text-xl font-semibold'
                    name="" id="">
                    <option className=' bg-slate-500' value="">11:00 AM</option>
                    <option className=' bg-slate-500' value="">12:00 AM</option>
                    <option className=' bg-slate-500' value="">1:00 AM</option>
                    <option className=' bg-slate-500' value="">2:00 AM</option>
                    <option className=' bg-slate-500' value="">3:00 AM</option>
                    <option className=' bg-slate-500' value="">4:00 AM</option>
                </select>

            </div>

            <div className='flex justify-center items-center mx-auto '>
                <Button text='Book Now'/>
            </div>
        </div>
    </div>


</div>
)
}

export default BookNow