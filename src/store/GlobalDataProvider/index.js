import React, {createContext, useContext, useState} from 'react';
import {addUser} from "../../api/users";
import {login} from "../../api/auth";

const GlobalDataContext = createContext();

function GlobalDataProvider(props) {
  const [loadingState, setLoadingState] = useState(false);
  const [users, setUsers] = useState([]);


  const register = async (userData) => {
    setLoadingState(true);
    return  await addUser(userData);
  }

  const handleLogin = async (loginData) => {
    setLoadingState(true);
    return  await login(loginData);
  }

  const providerValues = {
    loadingState,
    setLoadingState,
    register,
    handleLogin
  }
  return (
    <GlobalDataContext.Provider value={providerValues}>
      {props.children}
    </GlobalDataContext.Provider>
  )
}

function useGlobalData() {
  return useContext(GlobalDataContext)
}

export default GlobalDataContext
export {GlobalDataProvider, useGlobalData}
