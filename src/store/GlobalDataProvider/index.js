import React, {createContext, useContext, useState} from 'react';
import {getLocalStorage} from "../../service/localStorageService";

const GlobalDataContext = createContext();

function GlobalDataProvider(props) {
  const [userProfile, setUserProfile] = useState(getLocalStorage("userProfile"));

  const [loadingState, setLoadingState] = useState(false);
  const [cars, setCars] = useState([]);

  const providerValues = {
    loadingState,
    setLoadingState,
    setUserProfile,
    userProfile,
    cars,
    setCars
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
