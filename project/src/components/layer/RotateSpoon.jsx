import React from 'react'

const RotateSpoon = ({className}) => {
  return (
    <div>
      <picture className= {`${className}`}>
        <img className='animate-spin-slow' src="./src/assets/rotetSpon.png" alt="./src/assets/rotetSpon.png" />
      </picture>
    </div>
  )
}

export default RotateSpoon
