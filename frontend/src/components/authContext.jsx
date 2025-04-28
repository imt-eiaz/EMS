import React, { Children, useState } from "react";

const userContext = createContext();

const authContext = ({ children }) => {
  const [user, serUsesr] = useState(null);
  const login = () => {};

  const logout = () => {};
  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default authContext;
