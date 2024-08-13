import React from "react";

export const SignInCart = () => {
  return (
    <>
      <div className="absolute top-16 z-50 right-5 shadow-xl p-5 w-60 bg-white rounded">
        
        <a href="/login">
          <button className="bg-yellow-400 text-white text-lg w-full h-10 rounded hover:bg-yellow-300">
            Sign in
          </button>
        </a>
        <div className="flex mt-2 ">
          <p className="text-gray-400 text-sm mr-2">Don't have account ?</p>
          <a href="/signup" className="text-blue-500 text-sm hover:underline">
            Create
          </a>
        </div>
      </div>
    </>
  );
};
