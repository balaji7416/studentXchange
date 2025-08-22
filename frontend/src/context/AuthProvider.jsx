import { useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/authService.js";
import { useNavigate } from "react-router-dom";
import ApiError from "../utils/ApiError.js";
import { AuthContext } from "./AuthContext.jsx";

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
    setloading(false);
  }, []);

  const register = async (credentials) => {
    try {
      const data = await registerUser(credentials);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setToken(data.token);
      navigate("/"); // navigate to home
      return data;
    } catch (error) {
      console.log(error);
      throw new ApiError(error.status, error.message);
    }
  };

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setToken(data.token);
      navigate("/"); // navigate to home
      return data;
    } catch (error) {
      console.log(error);
      throw new ApiError(error.status, error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, register, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
