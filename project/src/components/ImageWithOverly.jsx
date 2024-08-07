import React from 'react'
import Container from './Container'

const ImageWithOverly = ({children, src, className, value}) => {
  return (
    <div className='relative '>
        <img className={`w-full ${value}`} src={src} alt={src} />
        <div className={`w-full h-full absolute top-0 left-0 bg-[rgba(12,12,12,0.40)] ${className}`}>
            <Container>
                {children}
            </Container>
        </div>
    </div>
  )
}

export default ImageWithOverly