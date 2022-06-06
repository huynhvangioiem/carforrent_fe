import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useGlobalData} from "../../store/GlobalDataProvider";
import {getLocalStorage} from "../../service/localStorageService";
import Navbar from "../../components/Navbar";
import CarElement from "../../components/CarElement";
import Footer from "../../components/Footer";

function HomePage(props) {

    const {cars} = useGlobalData();



    return (
        <div className="container">
            {/* Navbar */}
            <Navbar/>

            <div className="album py-5">
                <div className="container">
                    <div className="row">
                        <ShowCars cars={cars}/>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
}

const ShowCars = ({cars}) => {
    let CarsElement = cars.map((car, index) => (<CarElement key={index} car={car}/>))
    return (
        <>{CarsElement}</>
    )
}


export default HomePage;
