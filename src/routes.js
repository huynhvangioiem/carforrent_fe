import RegisterPage from "./Containers/RegisterPage";
import LoginPage from "./Containers/LoginPage";
import HomePage from "./Containers/HomePage";
import PageNotFound from "./Containers/PageNotFound";
import {Admin, Customer, Member} from "./constants/userRole";
import Dashboard from "./Containers/Dashboard";
import AddCar from "./Containers/AddCar";
import EditCar from "./Containers/EditCar";

export const routes = [
    {
        path: "/",
        element: <HomePage/>,
        role: [Admin, Customer]
    },
    {
        path: "/login",
        element: <LoginPage/>,
        role: [Customer]
    },
    {
        path: "/register",
        element: <RegisterPage/>,
        role: [Customer]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        role: [Admin]
    },
    {
        path: "/addcard",
        element: <AddCar/>,
        role: [Admin]
    },
    {
        path: "/editcar",
        element: <EditCar/>,
        role: [Admin]
    },
    {
        path: "*",
        element: <PageNotFound/>,
        role: [Customer, Admin, Member]
    }
];
