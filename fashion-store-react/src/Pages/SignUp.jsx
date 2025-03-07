import PropTypes from "prop-types";
import CommonButton from "../Components/CommonButton";

export default function SignUp({ handleCloseSignUp }) {
  return (
    <>
      <div className="w-96">
        <div className="bg-gray-50 p-5 rounded-lg shadow-md ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <div className="flex justify-end" onClick={handleCloseSignUp}>
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
              <label htmlFor="displayName" className="block text-gray-700">
                Display Name:
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
            <div className="mb-4">
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
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <CommonButton type="submit" className="w-full ">
              Sign Up
            </CommonButton>
          </form>
        </div>
      </div>
    </>
  );
}

SignUp.propTypes = {
    handleCloseSignUp: PropTypes.func.isRequired,
};
