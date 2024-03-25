/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/login",
        credentials
      );
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("accountId", response.data.account);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const register = async (userData) => {
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/register",
        userData
      );
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const logout = async () => {
    await axios.delete(import.meta.env.VITE_BACKEND_URL + "/logout", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("accountId");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
