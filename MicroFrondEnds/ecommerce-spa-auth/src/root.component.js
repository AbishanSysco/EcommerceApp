import "./index.css";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const SignIn = lazy(() => import('./Components/SignIn'));
const SignUp = lazy(() => import('./Components/SignUp'));

const Loader = () => <div>Loading...</div>;

export default function Root(props) {
  return (
    <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Suspense>
    </Router>
  );
}

