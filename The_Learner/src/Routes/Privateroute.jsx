import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";

const Privateroute = ({ children }) => {
  const { isAuth } = useContext(AppContext);

  // const { isAuth } = authState;

  // If 'isAuth' is false (user is not authenticated), navigate the user to the '/login' page
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // If 'isAuth' is true (user is authenticated), render the 'children' component(s)
  return children;
};

export default Privateroute;
