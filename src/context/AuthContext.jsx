import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  // const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  const login = (adminData) => {
  
  };

  return (
    <AuthContext.Provider value={{ admin, setAdmin, login }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
