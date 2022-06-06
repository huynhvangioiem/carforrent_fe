import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import {RenderFormTextField} from "../../components/FormElement/renderFormTextField";
import {FormAction} from "../../utils/CreateFormGroup";
import Footer from "../../components/Footer";
import {clearValidate, Validator} from "../../helpers/validation";
import {addCarValidationRuleData} from "../../configs/addCarValidationRuleData";
import {addCarAction, getCarAction, updateCarAction} from "../../actions/car";
import {toast} from "react-toastify";
import {useGlobalData} from "../../store/GlobalDataProvider";
import {useNavigate, useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import _ from "lodash";

function EditCar(props) {

    //Initial State and ...
    const {setLoadingState, cars, setCars} = useGlobalData();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams(); //get params from url

    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    //Data to render text field
    const formFieldsData = [
        {
            nameField: "brand",
            icon: <FontAwesomeIcon icon="fa-solid fa-car"/>,
            label: "Brand",
            inputType: "text",
            placeholder: "Car brand",
            value: brand,
            onChange: setBrand,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: addCarValidationRuleData[0]
        },
        {
            nameField: "description",
            icon: <FontAwesomeIcon icon="fa-solid fa-audio-description"/>,
            label: "Description",
            inputType: "text",
            placeholder: "Car description",
            value: description,
            onChange: setDescription,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: addCarValidationRuleData[1]
        },
        {
            nameField: "price",
            icon: <FontAwesomeIcon icon="fa-solid fa-hand-holding-dollar"/>,
            label: "Price",
            inputType: "number",
            placeholder: "Rent price",
            value: price,
            onChange: setPrice,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: addCarValidationRuleData[2]
        },
        {
            nameField: "img",
            icon: <FontAwesomeIcon icon="fa-solid fa-image"/>,
            label: "Link online image",
            inputType: "text",
            placeholder: "Car image",
            value: img,
            onChange: setImg,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: addCarValidationRuleData[3]
        }
    ]

    //Data to render form group actions button
    const formActionsData = [
        {
            btnType: "submit",
            btnStyle: "success",
            btnLable: "Save"
        }
    ]

    useEffect( () => {
        if(!_.isEmpty(cars)){
            let carID = searchParams.get('car');
            getCarAction(carID).then((res) => {
                if (res) {
                    setBrand(res.Brand);
                    setDescription(res.Description);
                    setPrice(res.Price);
                    setImg(res.img);
                }
            });
        }
        return () => handleReset()
    },[searchParams,cars]);


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!Validator(addCarValidationRuleData)) {
            return false;
        }
        const carData = {
            Brand: brand,
            Description: description,
            Price: price,
            img: img,
        }
        setLoadingState(true);
        let carID = searchParams.get('car');
        const carUpdated = await updateCarAction(carID,carData);
        if (carUpdated) {
            let index = _.findIndex(cars,(car)=>car.id == carID);
            cars[index] = carUpdated;
            setCars(cars);
            toast.error("Edit car success!");
            navigate(-1);
        } else {
            toast.error("Edit car failed!");
        }
        handleReset();
        setLoadingState(false);
    }

    const handleReset = () => {
        setBrand("");
        setDescription("");
        setPrice("");
        setImg("");
    }

    return (
        <div className="container">

            <Navbar/>

            <div className="row">
                <div className="col-md-12 title"><h3>EDIT CAR</h3></div>
                <div className="col-md-12 list">
                    <form method="post" action="" onSubmit={e => handleOnSubmit(e)}>
                        <RenderFormTextField>{formFieldsData}</RenderFormTextField>
                        <FormAction>{formActionsData}</FormAction>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default EditCar;
