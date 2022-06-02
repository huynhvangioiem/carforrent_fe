import React from 'react';
import {Link} from "react-router-dom";

function HomePage(props) {
    return (
        <div>
            This is home page
            <Link to="/register">Register Page</Link>
        </div>
    );
}

export default HomePage;
