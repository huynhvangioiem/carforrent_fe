import React from 'react';
import NotFoundImg from "../../img/404-page-not-found-768x416.png";
import {Link} from "react-router-dom";
import "../../styles/notFound.scss";
function PageNotFound(props) {

    return (
        <div className="container" id="notFoundPage">
            <div className="row background">
                <div className="col-md-12">
                    <img src={NotFoundImg} alt="notFoundImg"/>
                </div>
                <div className="col-md-12">
                    <Link to="/">Go To Home</Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
