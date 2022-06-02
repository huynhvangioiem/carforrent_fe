import React, {useState} from 'react';
import {CheckboxField, FormAction, TextField} from "../../utils/CreateFormGroup";
import {useGlobalData} from "../../store/GlobalDataProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clearValidate, Validator} from "../../helpers/validation";
import "../../styles/registerAndLogin.scss";
import ImageLoginPage from "../../components/ImageLoginPage";
import {loginValidationRuleData} from "../../configs/loginValidationRuleData";
import {Link, useNavigate} from "react-router-dom";
import {statusCode} from "../../constants/API";
import {toast} from "react-toastify";

function LoginPage(props) {


    //Initial State and ...
    const {handleLogin, setLoadingState} = useGlobalData();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

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
    //Data to render form group actions button
    const socialLoginData = [
        {
            btnType: "button",
            btnStyle: "primary btn-social",
            btnLable: <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        },
        {
            btnType: "button",
            btnStyle: "info btn-social",
            btnLable: <FontAwesomeIcon icon="fa-brands fa-twitter" />
        },
        {
            btnType: "button",
            btnStyle: "danger btn-social",
            btnLable: <FontAwesomeIcon icon="fa-brands fa-google" />
        }
    ]
    //Data to render checkbox remember
    const rememberProperty = {
        label: "Remember me",
        nameField: "remember",
        checked: remember,
        onChange: setRemember,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Validator(loginValidationRuleData)) {
            return false;
        }
        const loginData = {
            email: email,
            password: password,
        }
        const response = await handleLogin(loginData);
        setTimeout(() => {
            setLoadingState(false);
            if (response.status === statusCode.success) {
                handleReset();
                toast.success("Login success!");
                navigate('/')
            }else{
                toast.error("Login failed!");
            }
        }, 1000)
    }

    const handleReset = () => {
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container" id="loginPage">
            <div className="row">
                <div className="col-md-7" id="registerImage">
                    <ImageLoginPage/>
                </div>
                <div className="col-md-5" id="formLogin">
                    <div className="row">
                        <div className="col-md-12 title">Login</div>
                        <div className="col-md-12 formContent">
                            <form method="post" action="#" onReset={handleReset} onSubmit={e => handleSubmit(e)}>
                                <RenderFormTextField>{formFieldsData}</RenderFormTextField>
                                <div className="row">
                                    <div className="col-md-6">
                                        <CheckboxField {...rememberProperty}/>
                                    </div>
                                    <div className="col-md-6 forGotAction">
                                        <Link to="#">Forgot Password</Link>
                                    </div>
                                </div>
                                <FormAction>{formActionsData}</FormAction>
                                <div className="row signUpAction">
                                    <div className="col-md-12">
                                        Don't have an account?
                                        <Link to="/register">Sign up</Link>
                                        or login with
                                    </div>
                                </div>
                                <FormAction customClass="socialLogin">{socialLoginData}</FormAction>
                            </form>
                        </div>
                    </div>
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
