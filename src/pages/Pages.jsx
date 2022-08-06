import React from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cuisines from "./Cuisines";
import Search from "./Search";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <div className="pages">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisines />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Pages;
