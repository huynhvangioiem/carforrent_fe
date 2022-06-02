import React, {useState} from 'react';
import {FormAction, TextField} from "../../utils/CreateFormGroup";
import {useGlobalData} from "../../store/GlobalDataProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clearValidate, Validator} from "../../helpers/validation";
import "../../styles/registerAndLogin.scss";
import ImageLoginPage from "../../components/ImageLoginPage";
import {loginValidationRuleData} from "../../configs/loginValidationRuleData";

function LoginPage(props) {

    //Initial State and ...
    const {register} = useGlobalData();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Data to render text field
    const formFieldsData = [
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
            validateData: loginValidationRuleData[0]
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
            validateData: loginValidationRuleData[1]
        }
    ]

    //Data to render form group actions button
    const formActionsData = [
        {
            btnType: "submit",
            btnStyle: "success",
            btnLable: "Login"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Validator(loginValidationRuleData)) {
            const registerData = {
                "email": email,
                "password": password,
            }
            // if (register(registerData)) {
            //     handleReset();
            // }
        }
    }

    const handleReset = () => {
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container" id="loginPage">
            <div className="row">
                <div className="col-md-6" id="formLogin">
                    <div className="row">
                        <div className="col-md-12 title">Login</div>
                        <div className="col-md-12 formContent">
                            <form method="post" action="#" onReset={handleReset} onSubmit={e => handleSubmit(e)}>
                                <RenderFormTextField>{formFieldsData}</RenderFormTextField>
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
export default LoginPage;
