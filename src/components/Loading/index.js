import React from 'react';
import LoadingImg from "../../img/Loading.gif";
import "../../styles/loadingStyle.scss";

function Loading(props) {
    return (
        <div id="loadingPage">
            <img src={LoadingImg} alt="loading"/>
        </div>
    );
}
export default Loading;
