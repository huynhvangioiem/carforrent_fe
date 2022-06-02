import React, {createContext, useContext, useState} from 'react';
import {addUserAction} from "../../actions/users";
import {toast} from "react-toastify";
import {statusCode} from "../../constants/API";

const GlobalDataContext = createContext();

function GlobalDataProvider(props) {
    const [loadingState, setLoadingState] = useState(false);
    const [users, setUsers] = useState([]);

    const register = async (userData) => {
        setLoadingState(true);
        const response = await addUserAction(userData);
        setTimeout(() => setLoadingState(false), 1000);
        if (response.status === statusCode.created) {
            toast.success("Register success!")
            setUsers([...users,response.data]);
            return true;
        } else {
            toast.error("Register failed!");
            return false;
        }
    }

    const providerValues = {
        loadingState,
        register,
        users
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
