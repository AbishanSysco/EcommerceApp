import "./index.css?modules=false";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "./Components/Loading";

const Products = lazy(() => import("./Components/Products"));
const ProductDetails = lazy(() => import("./Components/ProductDetails"));

export default function Root(props) {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
