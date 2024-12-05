import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { LandingPage } from "../views/landing-view";
import { TopBar } from "../components/common/top-bar";
import { BlogPage } from "../views/blog-view";

const Routing = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/blog"
            element={<BlogPage />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
