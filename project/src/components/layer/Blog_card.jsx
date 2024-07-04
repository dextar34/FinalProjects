import React from 'react';
import Image from '../../components/layer/Images';
import { Link } from 'react-router-dom';

const Blog_card = ({src,href,date,shape,heading,more, to, className, extraClass, alt}) => {
  return (
    <div className={`card max-w-[412px] ${className}`}>
            <Image className="w-full" href={href} src={src} alt={alt}/>
            <div className={`flex items-center justify-between text-base font-Open text-[#FAFAFA] mt-6 mb-8`}>
              <p>{date}</p>
              <p>{shape}</p>
            </div>
            <Link to={href}>
            <h2 className={`text-[#DCCA87] text-[32px] font-Cormorant leading-10 tracking-[1.28px] capitalize ${extraClass}`}>{heading}</h2>
            </Link>
            <p className={`text-[#AAAAAA] text-base font-Open leading-7 tracking-[0.64px] my-8`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
            <p className={`flex items-center gap-2 text-[#DCCA87] text-base font-Cormorant font-bold`}>
                <Link to={to}>
                {more}
                </Link>
            </p>
        </div>
  );
}

export default Blog_card;
