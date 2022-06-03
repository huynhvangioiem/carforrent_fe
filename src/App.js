import RegisterPage from "./Containers/RegisterPage";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import "./App.scss";
import Loading from "./components/Loading";
import {useGlobalData} from "./store/GlobalDataProvider";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, useLocation} from "react-router-dom";
import {routes} from "./routes";
import {getLocalStorage} from "./service/localStorageService";
import {Customer} from "./constants/userRole";
import {canAccess} from "./helpers/handleACL";

library.add(fas, fab);

function App() {
    const {loadingState, userProfile, setUserProfile} = useGlobalData();
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(loadingState);
    const [userRole, setUserRole] = useState(Customer);


    useEffect(() => {
        setUserProfile(getLocalStorage("userProfile"));
    }, [])

    useEffect(() => {
        canAccess(location)
        // console.log();
    }, [location]);

    useEffect(() => {
        if (userProfile) {
            setUserRole(userProfile.role);
        }
    }, [userProfile]);


    useEffect(() => {
        setIsLoading(loadingState)
    }, [loadingState]);


    return (
        <>
            <ShowRouting>{routes}</ShowRouting>
            {isLoading && <Loading/>}
            <ToastContainer/>
        </>
    );
}

const ShowRouting = (props) => {
    const routes = props.children;
    let routing = routes.map((route, index) => <Route key={index} path={route.path} element={route.element}/>)
    return (
        <Routes>
            {routing}
        </Routes>
    )
}
export default App;
