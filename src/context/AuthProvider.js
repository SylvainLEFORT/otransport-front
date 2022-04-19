import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [token, setToken] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [roles, setRoles] = useState('');

  return (
    <AuthContext.Provider value={{ auth, setAuth, token, setToken, firstname, setFirstname, roles, setRoles }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
