import React, {useState} from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useGlobalData} from "../../store/GlobalDataProvider";
import TableCar from "../../components/TableCar";
import "../../styles/dashboard.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from "react-router-dom";
import {delCarAction} from "../../actions/car";
import {toast} from "react-toastify";
import _ from "lodash";

function Dashboard(props) {

    const {cars, setCars, setLoadingState} = useGlobalData();
    const navigative =  useNavigate();

    const handleEdit = (id) => {
        navigative("/editcar?car="+id);
    }

    const handleDel = async (id) => {
        setLoadingState(true);
        let response = await delCarAction(id);
        if(response){
            let index = _.findIndex(cars,(car)=>car.id === id)
            cars.splice(index, 1);
            setCars(cars);
            toast.success("Delete success!");
        }else{
            toast.error("Delete failed!");
        }
        setLoadingState(false);
    }

    return (
        <div className="container">

            <Navbar/>

            <div className="row">
                <div className="col-md-12 title">
                    <h3>Car List</h3>
                </div>
                <div className="col-md-12 list">

                    <TableCar edit={handleEdit} del={handleDel} data={cars}/>

                </div>

                <div className="col-md-12 action">
                    <Link to="/addcard">
                        <button type="button" className="btn btn-success" data-toggle="modal"
                                data-target="#addCarModal">
                            <FontAwesomeIcon icon="fa-solid fa-plus"/> Add Car
                        </button>
                    </Link>
                </div>

            </div>

            <Footer/>
        </div>
    );
}

export default Dashboard;
