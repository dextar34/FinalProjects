import React from 'react'
import Spoon from './Spoon'
import Headding from './Headding'
import Menu from './Menu'

const TodaysSpecial = () => {
  return (
    <div className='flex flex-col items-center'>
        <Spoon txt='Menu that fits you palatte'/>
        <Headding text='Today’s Special'/>
        <Menu/>
    </div>
  )
}

export default TodaysSpecial
