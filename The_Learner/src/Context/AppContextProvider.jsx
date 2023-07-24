import React, { createContext, useState } from "react";

// Create the AuthContext
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });

  const login = async (email, password) => {
    console.log(email, password);
    setAuthState((prevState) => ({
      ...prevState,
      loading: true,
      error: null,
    }));

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token } = data;
        setAuthState((prevState) => ({
          ...prevState,
          isAuth: true,
          token: token,
        }));
        console.log(authState);
      } else {
        throw new Error(
          data.error || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      setAuthState((prevState) => ({
        ...prevState,
        error: error.message,
      }));
    }

    setAuthState((prevState) => ({
      ...prevState,
      loading: false,
    }));
  };

  const logout = () => {
    setAuthState({ isAuth: false, loading: false, error: null, token: "" });
  };

  return (
    <AppContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
