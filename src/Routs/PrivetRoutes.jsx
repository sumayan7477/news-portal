import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  // chaking if there is a user or not
  const { user, loading } = useContext(AuthContext);

  // traking the locaton so that affter login we can move to the locaton
  const location =useLocation();
  console.log(location);


  if (loading) {
    return (
      <span className="loading loading-ring loading-lg absolute top-1/2 left-1/2"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
