import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useGlobalData} from "../../store/GlobalDataProvider";
import TableCar from "../../components/TableCar";
import "../../styles/dashboard.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddCarModal from "../../components/AddCarModal";

function Dashboard(props) {

  const {cars} = useGlobalData();

  return (
    <div className="container">

      <Navbar/>

      <div className="row">
        <div className="col-md-12 title">
          <h3>Car List</h3>
        </div>
        <div className="col-md-12 list">

          <TableCar data={cars}/>

        </div>

        <div className="col-md-12 action">
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addCarModal">
            <FontAwesomeIcon icon="fa-solid fa-plus"/> Add Car
          </button>
        </div>

      </div>

      <Footer/>
      <AddCarModal/>
    </div>
  );
}

export default Dashboard;
