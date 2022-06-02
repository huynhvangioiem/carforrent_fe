import RegisterPage from "./Containers/RegisterPage";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import "./App.scss";
import Loading from "./components/Loading";
import {useGlobalData} from "./store/GlobalDataProvider";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

library.add(fas);

function App() {

    const {loadingState} = useGlobalData();
    const [isLoading, setIsLoading] = useState(loadingState);
    useEffect(() => {
        setIsLoading(loadingState)
    }, [loadingState]);


    return (
        <>
            <RegisterPage/>
            {isLoading && <Loading/>}
            <ToastContainer />
        </>
    );
}

export default App;
