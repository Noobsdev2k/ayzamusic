import React, { Suspense, useEffect } from "react";
import { Routes as Router, Route, useNavigate } from "react-router-dom";
import { UseAuthentication } from "../hooks/useAuth";
import Config from "../utils/routes";
const accessTokenLocal = localStorage.accessToken;
const Routes = () => {
  const { accessToken } = UseAuthentication();
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessTokenLocal && !accessToken) {
      console.log(`"accessToken:" ${!accessToken}`);
      navigate("/home");
    }
  }, [accessToken, navigate]);
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
