import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './components/pages/Home';
import About from './components/pages/Services';
import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import Blog2 from './components/pages/Blog2';
import BlogsDetail from './components/pages/BlogsDetail';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import ComingSoon from './components/pages/ComingSoon';
import Faq from './components/pages/Faq';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        errorElement={<Error/>}
      >
        <Route index element={<Home/>}/>
        <Route path='/our/services' element={<Services/>}/>
        <Route path="/our/blogs-/with/sidebar" element={<Blog/>}/>
        <Route path="/our/blogs-/single/column" element={<Blog2/>}/>
        <Route path="/tips/for/prepping/and/caring/for/your/grill" element={<BlogsDetail/>}/>
        <Route path="/Contact/Us" element={<Contact/>}/>
        <Route path="/Coming" element={<ComingSoon/>}/>  
        <Route path="/faq" element={<Faq/>}/>  
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
