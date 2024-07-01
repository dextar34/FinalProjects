import React from 'react'
import rotetSpon from '../../assets/rotetSpon.png'
const RotateSpoon = ({className}) => {
  return (
    <div>
      <picture className= {`${className}`}>
        <img className='animate-spin-slow' src={rotetSpon} alt="./src/assets/rotetSpon.png" />
      </picture>
    </div>
  )
}

export default RotateSpoon
