import React, {useState} from 'react';
import '../../styles/registerAndLogin.scss'
import {Button, Checkbox, Input, Label, MessageField} from "../../components/FormElement";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clearValidate, Validator} from "../../helpers/validation";
import {registerValidatesData} from "../../configs/registerValidationRuleData";
import {CheckboxField, FormAction, TextField} from "../../utils/CreateFormGroup";
import {useGlobalData} from "../../store/GlobalDataProvider";
import {Link} from "react-router-dom";
import ImageLoginPage from "../../components/ImageLoginPage";


function RegisterPage(props) {

    //Initial State and ...
    const {register} = useGlobalData();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [agreeTerm, setAgreeTerm] = useState(false);

    //Data to render text field
    const formFieldsData = [
        {
            nameField: "fullName",
            icon: <FontAwesomeIcon icon="fa-solid fa-user"/>,
            label: "Full name",
            inputType: "text",
            placeholder: "Your full name",
            value: fullName,
            onChange: setFullName,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: registerValidatesData[0]
        },
        {
            nameField: "email",
            icon: <FontAwesomeIcon icon="fa-solid fa-envelope"/>,
            label: "Email",
            inputType: "email",
            placeholder: "Your email",
            value: email,
            onChange: setEmail,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: registerValidatesData[1]
        },
        {
            nameField: "password",
            icon: <FontAwesomeIcon icon="fa-solid fa-unlock"/>,
            label: "Password",
            inputType: "password",
            placeholder: "Your password",
            value: password,
            onChange: setPassword,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: registerValidatesData[2]
        },
        {
            nameField: "rePassword",
            icon: <FontAwesomeIcon icon="fa-solid fa-unlock-keyhole"/>,
            label: "Confirm Password",
            inputType: "password",
            placeholder: "Repeat your password",
            value: rePassword,
            onChange: setRePassword,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: registerValidatesData[3]
        },
        {
            nameField: "phoneNumber",
            icon: <FontAwesomeIcon icon="fa-solid fa-phone"/>,
            label: "Phone number",
            inputType: "text",
            placeholder: "Your phone number",
            value: phoneNumber,
            onChange: setPhoneNumber,
            onInput: clearValidate,
            onBlur: Validator,
            validateData: registerValidatesData[4]
        }
    ]
    //Data to render checkbox agreeTerm
    const agreeTermProperty = {
        nameField: "agreeTerm",
        checked: agreeTerm,
        onChange: setAgreeTerm,
        onInput: clearValidate,
        onBlur: Validator,
        label: "I agree all statements in Terms of service",
        validateData: registerValidatesData[5]
    }
    //Data to render form group actions button
    const formActionsData = [
        {
            btnType: "submit",
            btnStyle: "success",
            btnLable: "Submit"
        },
        {
            btnType: "reset",
            btnStyle: "warning",
            btnLable: "Reset"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Validator(registerValidatesData)) {
            const registerData = {
                "fullName": fullName,
                "email": email,
                "password": password,
                "phoneNumber": phoneNumber,
                // "agreeTerm": agreeTerm
            }
            if (register(registerData)) {
                handleReset();
            }
        }
    }

    const handleReset = () => {
        setFullName("");
        setEmail("");
        setPassword("");
        setRePassword("");
        setPhoneNumber("");
        setAgreeTerm("");
    }

    return (
        <div className="container" id="registerPage">
            <div className="row">
                <div className="col-md-6" id="formRegister">
                    <div className="row">
                        <div className="col-md-12 title">Register</div>
                        <div className="col-md-12 subtitle">
                            <Link to="/login">I already have account!</Link>
                        </div>
                        <div className="col-md-12 formContent">
                            <form method="post" action="#" onReset={handleReset} onSubmit={e => handleSubmit(e)}>
                                <RenderFormTextField>{formFieldsData}</RenderFormTextField>
                                <CheckboxField>{agreeTermProperty}</CheckboxField>
                                <FormAction>{formActionsData}</FormAction>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" id="registerImage">
                    <ImageLoginPage/>
                </div>
            </div>
        </div>
    );
}

const RenderFormTextField = (props) => {
    const formFieldsData = props.children;
    let textFields = formFieldsData.map((field, index) => <TextField key={index}>{field}</TextField>)
    return (
        <>
            {textFields}
        </>
    )
}
export default RegisterPage;
