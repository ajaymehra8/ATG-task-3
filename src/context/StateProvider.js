import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const StateContext = createContext();

const StateProvider = ({ children }) => {
  
const [selectedUser,setSelectedUser]=useState();
  return (
    <StateContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const UseChange = () => {
  return useContext(StateContext);
};
export default StateProvider;
