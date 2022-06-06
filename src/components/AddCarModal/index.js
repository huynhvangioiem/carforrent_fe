import React, {useState} from 'react';
import {RenderFormTextField} from "../FormElement/renderFormTextField";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clearValidate, Validator} from "../../helpers/validation";
import {loginValidationRuleData} from "../../configs/loginValidationRuleData";

function AddCarModal(props) {

  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  //Data to render text field
  const formFieldsData = [
    {
      nameField: "brand",
      icon: <FontAwesomeIcon icon="fa-solid fa-envelope"/>,
      label: "Brand",
      inputType: "text",
      placeholder: "Car brand",
      value: brand,
      onChange: setBrand,
      onInput: clearValidate,
      onBlur: Validator,
      // validateData: loginValidationRuleData[0]
    },
    {
      nameField: "description",
      icon: <FontAwesomeIcon icon="fa-solid fa-unlock"/>,
      label: "Description",
      inputType: "text",
      placeholder: "Car description",
      value: description,
      onChange: setDescription,
      onInput: clearValidate,
      onBlur: Validator,
      // validateData: loginValidationRuleData[1]
    }
  ]

  return (
    <div className="modal fade" id="addCarModal" tabIndex="-1" role="dialog" aria-labelledby="addCarModalLabel"
         aria-hidden="true">
      <div className="modal-dialog" role="document">
        <form method="post" action="">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCarModalLabel">Add Car</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <RenderFormTextField>{formFieldsData}</RenderFormTextField>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCarModal;
