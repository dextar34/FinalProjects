import React from 'react';
import BreadCrumb from '../../components/layer/Bredcum';
import Container from '../Container';
import With_Sidebar from '../layer/With_Sidebar';

const Blog = () => {
  return (
    <div>
        <BreadCrumb text='Our Blogs'/>
        <With_Sidebar/>
    </div>
  );
}

export default Blog;