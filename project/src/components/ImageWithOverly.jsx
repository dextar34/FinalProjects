import React from 'react'
import Container from './Container'

const ImageWithOverly = ({children, src, className,classNameForImg}) => {
  return (
    <div className='relative'>
        <img src={src} alt={src} className={classNameForImg} />
        <div className={`w-full h-full absolute top-0 left-0 bg-[rgba(12,12,12,0.40)] ${className}`}>
            <Container>
                {children}
            </Container>
        </div>
    </div>
  )
}

export default ImageWithOverly