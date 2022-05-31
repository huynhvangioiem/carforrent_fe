import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  Checked,
  clearValidate,
  Confirm,
  Email,
  Password,
  PhoneNumber,
  Required,
  Validator
} from "../helpers/validation";

function FormRegister() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreeTerm, setAgreeTerm] = useState(false);

  const validateDatas = [
    {
      "objName": "#fullName",
      "rules": [{"function": Required}]
    },
    {
      "objName": "#email",
      "rules": [{"function": Required}, {"function": Email}]
    },
    {
      "objName": "#password",
      "rules": [{"function": Required}, {"function": Password}]
    },
    {
      "objName": "#rePassword",
      "rules": [{"function": Confirm, checkValue: password, message: "Password confirm not match!"}]
    },
    {
      "objName": "#phoneNumber",
      "rules": [{"function": Required}, {"function": PhoneNumber}]
    },
    {
      "objName": "#agreeTerm",
      "rules": [{"function": Checked}]
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validator(validateDatas)) {
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

  return (
    <div className="row">
      <div className="col-md-12 title">Register</div>
      <div className="col-md-12 formContent">
        <form method="post" action="#" onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="fullName"><FontAwesomeIcon icon="fa-solid fa-user"/>Full name</label>
            <input type="text" name="fullName" id="fullName" className="form-control" placeholder="Your full name"
                   value={fullName}
                   onChange={e => setFullName(e.target.value)}
                   onInput={e => clearValidate("#fullName")}
                   onBlur={e => Validator([validateDatas[0]])}
            />
            <div className="text-muted form-message"></div>
          </div>
          <div className="form-group">
            <label htmlFor="email"><FontAwesomeIcon icon="fa-solid fa-envelope"/>Email</label>
            <input type="text" name="email" id="email" className="form-control" placeholder="Your email"
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   onInput={e => clearValidate("#email")}
                   onBlur={e => Validator([validateDatas[1]])}
            />
            <div className="text-muted form-message"></div>
          </div>
          <div className="form-group">
            <label htmlFor="password"><FontAwesomeIcon icon="fa-solid fa-unlock"/>Password</label>
            <input type="password" name="password" id="password" className="form-control" placeholder="Your password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   onInput={e => clearValidate("#password")}
                   onBlur={e => Validator([validateDatas[2]])}
            />
            <div className="text-muted form-message"></div>
          </div>
          <div className="form-group">
            <label htmlFor="rePassword"><FontAwesomeIcon icon="fa-solid fa-unlock-keyhole"/>Confirm password</label>
            <input type="password" name="rePassword" id="rePassword" className="form-control"
                   placeholder="Repeat your password"
                   value={rePassword}
                   onChange={e => setRePassword(e.target.value)}
                   onInput={e => clearValidate("#rePassword")}
                   onBlur={e => Validator([validateDatas[3]])}
            />
            <div className="text-muted form-message"></div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber"><FontAwesomeIcon icon="fa-solid fa-phone"/>Phone number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" className="form-control"
                   placeholder="Your phone number"
                   value={phoneNumber}
                   onChange={e => setPhoneNumber(e.target.value)}
                   onInput={e => clearValidate("#phoneNumber")}
                   onBlur={e => Validator([validateDatas[4]])}
            />
            <div className="text-muted form-message"></div>
          </div>
          <label className="form-check-label">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="agreeTerm" id="agreeTerm"
                     checked={agreeTerm}
                     onChange={e => setAgreeTerm(e.target.checked)}
                     onInput={e => clearValidate("#agreeTerm")}
                     onBlur={e => Validator([validateDatas[5]])}
              />
              I agree all statements in Terms of service
              <div className="text-muted form-message"></div>
            </div>
          </label>

          <div className="form-group action">
            <button type="submit" className="btn btn-success">Submit</button>
            <button type="reset" className="btn btn-warning">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRegister;
