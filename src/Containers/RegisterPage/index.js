import React from 'react';
import FormRegister from "../../components/formRegister";
import RegisterImage from "../../components/registerImage";
import '../../styles/registerAndLogin.scss';

function RegisterPage() {
  return (
    <div className="container" id="registerPage">
      <div className="row">
        <div className="col-md-6" id="formRegister">
          <FormRegister/>
        </div>
        <div className="col-md-6" id="registerImage">
          <RegisterImage/>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
