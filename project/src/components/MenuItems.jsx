import React from 'react'

const MenuItems = () => {
  return (
    <div className='mb-10'>
      <div className="main flex gap-x-8 items-center ">
        <h1>Name</h1>
        <div className="bar w-[119px] h-[1px] bg-white"></div>
        <p>35$</p>
      </div>
      <div className="w-[90px] flex gap-5 mt-2">
        <div className="border-r-2 border-white">
            <p className='pr-5'>Ar</p>
        </div>
        <div className="">
            <p>bottle</p>
        </div>

      </div>
    </div>
  )
}

export default MenuItems
