import React, {useState} from 'react';
import {RenderFormTextField} from "../../components/FormElement/renderFormTextField";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useGlobalData} from "../../store/GlobalDataProvider";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clearValidate, Validator} from "../../helpers/validation";
import {addCarValidationRuleData} from "../../configs/addCarValidationRuleData";
import {addCarAction} from "../../actions/car";
import {toast} from "react-toastify";
import {FormAction} from "../../utils/CreateFormGroup";

function AddCar(props) {

    //Initial State and ...
    const {setLoadingState, cars, setCars} = useGlobalData();
    const navigate = useNavigate();

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
            btnType: "reset",
            btnStyle: "warning",
            btnLable: "Reset"
        },
        {
            btnType: "submit",
            btnStyle: "success",
            btnLable: "Add"
        }
    ]

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
        const carAdded = await addCarAction(carData);
        if (carAdded) {
            setCars([...cars, carAdded]);
            toast.success("Add car success!");
            navigate(-1);
        } else {
            toast.error("Add car failed!");
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
                <div className="col-md-12 title"><h3>ADD CAR</h3></div>
                <div className="col-md-12 list">
                    <form method="post" action="" onReset={handleReset} onSubmit={e => handleOnSubmit(e)}>
                        <RenderFormTextField>{formFieldsData}</RenderFormTextField>
                        <FormAction>{formActionsData}</FormAction>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AddCar;
