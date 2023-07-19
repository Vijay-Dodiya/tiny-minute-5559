import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = () => {
    // Perform your login logic here
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    // Perform your logout logic here
    setIsAuthenticated(false);
  };

  // Provide the authentication state and functions to the children components
  const authContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppContextProvider;
