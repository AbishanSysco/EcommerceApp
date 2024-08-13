import React, { useState, useEffect } from "react";
import { NavBar } from "../Components/NavBar";
import Footer from "../Components/Footer";
import Products from "../Components/Products";

const MenuPage = () => {
  // const [Products, setProducts] = useState("");

  // useEffect(() => {
  //   System.import("@sabi2899/spa-products")
  //     .then((module) => {
  //       setProducts(() => module.default); // If it's a default export
  //     })
  //     .catch((error) => console.error("Error loading Products:", error));
  // }, []);

  return (
    <div className="flex-row">
      <section>
        <NavBar />
      </section>
      <section className='border-2 shadow-inner'>
        <Products />
      </section>
      <section title="about" className="hover:border-2 hover:shadow-inner">
        <Footer />
      </section>
    </div>
  );
};

export default MenuPage;
