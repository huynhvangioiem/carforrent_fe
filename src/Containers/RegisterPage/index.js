import React, {useState} from 'react';
import '../../styles/registerAndLogin.scss'
import {Checkbox, Input, Label, MessageField} from "../../components/FormElement";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clearValidate, Validator} from "../../helpers/validation";
import {registerValidatesData} from "../../configs/registerValidationRuleData";
import Button from "../../components/FormElement/Button";

function RegisterPage(props) {

  //Initial State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreeTerm, setAgreeTerm] = useState(false);


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

  const agreeTermProperty = {
    nameField: "agreeTerm",
    checked: agreeTerm,
    onChange: setAgreeTerm,
    onInput: clearValidate,
    onBlur: Validator,
    label: "I agree all statements in Terms of service",
    validateData: registerValidatesData[5]
  }

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
        "agreeTerm": agreeTerm
      }
      console.log(JSON.stringify(registerData));
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
            <div className="col-md-12 formContent">
              <form method="post" action="#" onReset={handleReset} onSubmit={e => handleSubmit(e)}>
                <RenderFormTextField>{formFieldsData}</RenderFormTextField>
                <ShowCheckboxField>{agreeTermProperty}</ShowCheckboxField>
                <ShowActionForm>{formActionsData}</ShowActionForm>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6" id="registerImage">
          <div className="row">
            <div className="col-md-12 image">
              <img src="https://www.cinch.co.uk/static/33916de99a6cf53e7a430f9f862a3296/99791/home-hero.png"
                   className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RenderFormTextField = (props) => {
  const formFieldsData = props.children;
  let textFields = formFieldsData.map((field, index) => <ShowTextField key={index}>{field}</ShowTextField>)
  return (
    <>
      {textFields}
    </>
  )
}
const ShowTextField = (props) => {
  const property = props.children;
  return (
    <div className="form-group">
      <Label name={property.nameField} icon={property.icon} label={property.label}/>
      <Input
        type={property.inputType}
        name={property.nameField}
        id={property.nameField}
        placeholder={property.placeholder}
        value={property.value}
        onChange={property.onChange}
        onInput={property.onInput}
        onBlur={property.onBlur}
        validateData={property.validateData}
      />
      <MessageField/>
    </div>
  )
}
const ShowCheckboxField = (props) => {
  const property = props.children;
  return (
    <label className="form-check-label">
      <div className="form-check">
        <Checkbox
          name={property.nameField}
          id={property.nameField}
          checked={property.checked}
          onChange={property.onChange}
          onInput={property.onInput}
          onBlur={property.onBlur}
          validateData={property.validateData}
        />
        {property.label}
        <MessageField/>
      </div>
    </label>
  )
}
const ShowActionForm = (props) => {
  const actions = props.children;
  let action = actions.map((action, index) =>
    <Button key={index} type={action.btnType} style={action.btnStyle}>{action.btnLable}</Button>
  )
  return (
    <div className="form-group action">
      {action}
    </div>
  )
}
export default RegisterPage;
