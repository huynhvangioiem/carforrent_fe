import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useGlobalData} from "../../store/GlobalDataProvider";
import {getLocalStorage} from "../../service/localStorageService";

function HomePage(props) {

    return (
        <div>
            This is home page
            <Link to="/register">Register Page</Link>
            <Link to="/login">Login Page</Link>
        </div>
    );
}

export default HomePage;
