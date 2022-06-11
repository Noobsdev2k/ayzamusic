import React, { Suspense } from "react";
import { Routes as Router, Route } from "react-router-dom";
import Config from "../utils/routes";

const Routes = () => {
  return (
    <Suspense fallback={<></>}>
      <Router>
        {Config.map(({ path, element, exact }, index) => (
          <Route
            key={`route-${index}`}
            exact={exact}
            path={path}
            element={element}
          />
        ))}
      </Router>
    </Suspense>
  );
};

export default Routes;
