import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import "./App.scss";
import Loading from "./components/Loading";
import {useGlobalData} from "./store/GlobalDataProvider";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {routes} from "./routes";
import {Customer} from "./constants/userRole";
import {canAccess} from "./helpers/handleACL";
import {loadCarAction} from "./actions/car";

library.add(fas, fab);

function App() {

  /* Declare */
  const {loadingState, setLoadingState, userProfile, setCars} = useGlobalData();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(loadingState);

  useEffect( () => {
    setLoadingState(true);
    loadCarAction().then((res)=>{
      setCars(res);
      setLoadingState(false);
    });
  }, []);


  /* handle ACL */
  useEffect(() => {
    let userRole = Customer;

    if (userProfile) {
      userRole = userProfile.role;
    }

    if (!canAccess(location, userRole)) {
      setLoadingState(true);
      if (userRole === -1) {
        toast.error("Please login!");
        setTimeout(() => {
          navigate("/login");
          setLoadingState(false);
        }, 500)
      } else {
        setTimeout(() => {
          navigate("/");
          setLoadingState(false);
        }, 500)
      }
    }
  }, [location]);

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
