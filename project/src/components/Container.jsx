import React from 'react';

const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1680px] p-10 mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;
