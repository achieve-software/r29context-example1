import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

//! 1) creating Context

export const LoginContext = createContext();

//! 2- ) Providerconst

const LoginProvider = ({ children }) => {
  //  props.children
  const [user, setUser] = useState({ email: "", password: "" });
  const values = { user, setUser };
  return (
    <LoginContext.Provider value={{ values }}>{children}</LoginContext.Provider>
  );
};

//! 3) Consuming
export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
