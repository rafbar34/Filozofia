import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { LandingPage } from "../views/landing-view";
import { TopBar } from "../components/common/top-bar";
import { BlogPage } from "../views/blog-view";
import { SurveyPage } from "../views/survey-view";
import { ChartsPage } from "../views/charts-view";
import { ArticlesPage } from "../views/articles-views";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route element={<TopBar />}>
          <Route
            exact
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/blog"
            element={<BlogPage />}
          />
          <Route
          path="/artykuly"
          element={<ArticlesPage/>}
          />
          <Route
            path="/survey"
            element={<SurveyPage />}
          />
          <Route
            path="/charts"
            element={<ChartsPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
