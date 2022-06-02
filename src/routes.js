import RegisterPage from "./Containers/RegisterPage";
import LoginPage from "./Containers/LoginPage";
import HomePage from "./Containers/HomePage";

export const routes = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    }
];
