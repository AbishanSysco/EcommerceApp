import "./index.css?modules=false";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from "./Components/Loading";

const ShoppingCart = lazy(() => import('./Components/ShoppingCart'));


export default function Root(props) {
  return (
    <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Suspense>
    </Router>
  );
}

