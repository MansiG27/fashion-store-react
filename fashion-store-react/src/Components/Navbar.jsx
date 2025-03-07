import { Outlet } from "react-router-dom";
import Login from "../Pages/Login";
import { useState } from "react";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="#">Logo</a>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <a
              onClick={handleLoginClick}
              className="text-gray-700 hover:text-gray-900"
            >
              Sign In
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg
                className="w-6 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18l-2 13H5L3 3z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 6V4a4 4 0 00-8 0v2"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
      {isLoginOpen && (
        
        <div className="fixed inset-0 flex items-center justify-center bg-gray/50 z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
      
          {/* Login Card (removing transparency issue) */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
            <Login handleClose={handleClose} handleLoginClick={()=>setIsLoginOpen(false)}  />
          </div>
        </div>
  
      
      )}
    </>
  );
}

export default Navbar;
