import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "./useSessionStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useSessionStorage("token", null);
  const [userid, setUserId] = useSessionStorage("userid", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setToken(data.token);
    setUserId(data.userid);
    navigate("/dashboard");
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      userid,
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};