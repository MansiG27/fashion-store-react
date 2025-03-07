import PropTypes from "prop-types";
import SignUp from "./SignUp";
import { useState } from "react";
import CommonButton from "../Components/CommonButton";

export default function Login({ handleClose}) {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
    handleClose();
  };
  return (
    <>
      <div className="w-full">
        <div className="bg-gray-50 p-5 rounded-lg shadow-md ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <div className="flex justify-end" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:flex md:justify-between md:gap-3 ">
              <CommonButton type="submit" className="w-full md:w-40 ">
                Sign In
              </CommonButton>
              <CommonButton
                type="submit"
                className="mt-2 md:mt-0 w-full md:w-fit"
              > 
                Sign In with
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block ml-2"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.1 0 5.6 1.1 7.5 2.9l5.6-5.6C33.4 3.2 28.9 1 24 1 14.8 1 7.3 6.9 4.3 15.1l6.9 5.4C12.8 14.1 17 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.5 24c0-1.6-.1-3.1-.4-4.6H24v9h12.7c-.6 3.2-2.5 5.9-5.2 7.7l6.9 5.4C42.9 37.1 46.5 31 46.5 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.2 28.5c-1-3.2-1-6.8 0-10l-6.9-5.4C.5 17.1 0 20.5 0 24s.5 6.9 1.3 10.1l6.9-5.6z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 46c5.9 0 10.8-1.9 14.4-5.2l-6.9-5.4c-2 1.3-4.5 2.1-7.5 2.1-7 0-12.9-4.7-15-11.1l-6.9 5.4C7.3 41.1 14.8 46 24 46z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
              </CommonButton>
            </div>
          </form>

          <p className="mt-4 text-center">
            Didn&apos;t register?{" "}
            <a
              onClick={handleSignUpClick}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
        {isSignUpOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray/50 z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>

            {/* Login Card (removing transparency issue) */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
              <SignUp handleCloseSignUp={handleCloseSignUp} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
};
