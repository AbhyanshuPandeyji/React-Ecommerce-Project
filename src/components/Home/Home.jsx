import '../../App.css'

import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom'
// constants components
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

// variable components 
import Product from '../../pages/Product/Product.jsx';
import Products from '../../pages/Products/Products.jsx';
import Homepage from '../../pages/Homepage/Homepage.jsx';
import Contact from '../../pages/Contact/Contact.jsx';
import About from '../../pages/About/About.jsx'




// this is to have the pages between the navbar and the footer
const Layout = () =>{
  return (

      <div className="App">
        <Navbar/>
        {/* // it represents our different pages */}
        <Outlet/>
        <Footer/>
      </div>

  )
}





// this will be our router system it will be an array of object to have multiple routes with elements
const router = createBrowserRouter([

  // the way to create the routes with the outlet - requires main component and the children as an array of objects
  // it will be the object within the object to create it
  {
    path:"/",
    element:<Layout/>,
    // this children will include our different pages of routes
    children: [
      {
        path:"/",
        element:<Homepage/>,
      },
      {
        path:"/products/:id",
        element:<Products/>,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
    ]

  }

  
])



const Home = () => {

  return (
    

    <div>
      {/* // this will be our router system with an variable defined with name router the variable could be different but it will pass into the routerProvieder */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default Home;
