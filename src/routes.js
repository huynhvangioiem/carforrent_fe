import RegisterPage from "./Containers/RegisterPage";
import LoginPage from "./Containers/LoginPage";
import HomePage from "./Containers/HomePage";
import PageNotFound from "./Containers/PageNotFound";
import {Admin, Customer} from "./constants/userRole";

export const routes = [
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    },
    {
        path: "*",
        element: <PageNotFound/>,
    }
];
