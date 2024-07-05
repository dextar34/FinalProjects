import React from 'react';

const CommentCard = ({src, alt, name, date, text, className, extraClassName, pragraphWith}) => {
  return (
    <div className={`flex items-center gap-x-6 ${className}`}>
    <div className='image h-[150px] w-[150px]'>
      <img className='w-full' src={src} alt={alt}/>
    </div>
    <div>
      <div className='flex items-center '>
      <h2 className={`text-[#FFFFFF] text-2xl font-bold font-Cormorant tracking-[0.64px] hover:text-[#DCCA87] ${extraClassName}`}>{name}</h2>
      <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7'>Reply</p>
      </div>
      <p className='text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 py-2'>{date}</p>
      <p className={`text-[#AAAAAA] text-base font-Open tracking-[0.64px] leading-7 ${pragraphWith}`}>{text}</p>
    </div>
  </div>
  );
}

export default CommentCard;
