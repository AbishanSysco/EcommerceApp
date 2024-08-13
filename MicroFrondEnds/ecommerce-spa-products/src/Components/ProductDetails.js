import React, { useState } from "react";

const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const ClickMinusButton = () => {
    if (count > 1) {
      setCount((prev) => (prev = prev - 1));
    } else {
      setCount(1);
    }
  };

  const ClickPlusButton = () => {
    setCount((prev) => (prev = prev + 1));
  };
  return (
    <div className="font-sans p-5 w-screen h-screen ">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Product Info
      </h1>

      <div className="shadow-xl  border-t-2 border-gray-100 shadow-purple-300/50 md:ml-32 md:mr-32 lg:56 lg-56  rounded  mt-20 justify-center flex md:flex-row flex-col">
        <div className=" md:w-1/2 bg-gray-200 h-36 sm-64 md:h-80 rounded">
          <img
            alt="alert"
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="pt-10  font-serif flex flex-col items-center md:items-start ml-10 sm:ml-8 space-y-2 md:w-1/2 h-64 sm-64 md:space-y-3  md:h-80 rounded">
          <div className="text-3xl text-violet-700 font-bold ">Basic Tee</div>
          <div className="text-xl text-violet-700 font-bold">$35</div>

          <div className="flex flex-row w-1/4">
            <div className="h-10 items-center text-center flex flex-row border-2 rounded-md w-full border-gray-200">
              <button
                type="button"
                onClick={ClickMinusButton}
                className="w-1/2 items-center px-3 py-1.5 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <span className="text-2xl text-gray-600 font-bold"> - </span>
              </button>

              <p className="w-1/2 text-xl text-gray-600 font-bold" name="count">
                {count}
              </p>

              <button
                type="button"
                onClick={ClickPlusButton}
                className="w-1/2 items-center px-3 py-1.5 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <span className="text-2xl text-gray-600 font-bold text-center">
                  {" "}
                  +{" "}
                </span>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <button
              type="button"
              className="w-full text-sm px-4 py-2.5  font-semibold tracking-wide bg-purple-400 hover:bg-purple-600 text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
