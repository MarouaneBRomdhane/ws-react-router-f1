import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        {/* Route render UI if location matches the route's path */}
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome</h1>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Fragment>
  );
};

export default App;
