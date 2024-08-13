import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SeacrhBar } from "./SeacrhBar";
import { Link } from 'react-router-dom';
import { SignInCart } from "./SignInCart";

export const NavBar = () => {
  const [openCart,setIsopenCart] = useState(false)

  const handleSignInCart = ()=>{
    setIsopenCart(true);
  }
  return (
   
    <nav className="bg-white" role="navigation" >
      <div className=" container md:pt-5 font-bold mx-auto p-0 lg:p-4 flex flex-wrap items-center sm:flex-no-wrap">
      
        <div className="flex flex-row w-full p-5 md:p-0">
              
          <div className="flex  mt-2 w-1/7 justify-center mr-4 md:mr-8">
              <a href="#" rel="home">
                <svg
                  className="w-10 h-10 text-purple-600"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Nav bar</title>
                  <path
                    fill="currentColor"
                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="hidden md:block w-1/2 md:w-1/3 md:flex-grow md:flex md:items-center">
              <ul className=" flex flex-row mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
                <li>
                  <a className="text-purple-600  w-full  block " href="#" title="Home">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 w-full text-purple-600"
                    href="#"
                    title="About"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full text-purple-600"
                    href="#"
                    title="Active Link"
                  >
                    Contact Us
                  </a>
                </li>
                
              </ul>
            </div>

            <div className="block w-full md:w-1/2 mt-2 flex flex-row justify-center">
                <SeacrhBar />
            </div>

            <div className="w-1/2 mx-8 sm:w-1/2 sm:mx-16  mt-4 justify-center items-center md:hidden">
                <button
                  className="px-3 py-2 border rounded"
                  type="button"
                >
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            
            
            
            
            <div className="hidden md:block w-1/2  md:w-1/3 md:flex-grow md:flex md:items-center">
                <ul className="flex flex-row mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
                    <li>
                    <button
                      onClick={handleSignInCart}
                      className="hidden lg:block b text-purple-500 hover:underline hover:text-red-500 px-4 py-1 md:p-2 lg:px-4"
                      >
                        Hello,sign in
                    </button>

                    <button className="block lg:hidden" onClick={handleSignInCart}>
                        <i className="fas fa-user my-2 mx-2 mr-5 text-2xl  hover:text-red-500 text-gray-700"></i>
                    </button> 
                    </li>
                    <li>
                      <Link className="block px-4 py-1 md:p-2 lg:px-4" to="/cart" title="Active Items">
                          <i className="fas fa-cart-plus my-2 mx-2 mr-5 text-2xl  hover:text-red-500 text-gray-700"></i>
                      </Link>
                    </li>
                  </ul> 
            </div>
          </div>   

        {/* <SeacrhBar />

          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li>
             <button
              onClick={handleSignInCart}
              className="b text-purple-500 hover:underline hover:text-red-500 px-4 py-1 md:p-2 lg:px-4"
              >
                Hello,sign in
              </button>
            </li>
            <li>
              <Link className="block px-4 py-1 md:p-2 lg:px-4" to="/cart" title="Active Items">
                  <i className="fas fa-cart-plus my-2 mx-2 mr-5 text-2xl  hover:text-red-500 text-gray-700"></i>
              </Link>
            </li>
          </ul> */}

        
      </div>
      {openCart && (<SignInCart/>)}
    </nav>
    
        
  );
};
