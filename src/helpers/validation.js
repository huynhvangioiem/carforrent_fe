export const Validator = (validateData) => {
  let resultValidate = true;
  validateData.forEach(validateItem => {
    for (let i = 0; i < validateItem.rules.length; i++) {
      const rule = validateItem.rules[i];
      if (!rule.function(validateItem.objName, rule.checkValue, rule.message)) {
        resultValidate = false;
        break;
      }
    }
  });
  return resultValidate;
}

const getInputElm = (selector) => {
  return document.querySelector(selector);
}

const getErrorElm = (inputElement) => {
  return inputElement.parentElement.querySelector(".form-message");
}
const addClass = (errorElement) => {
  errorElement.parentElement.classList.add('invalid');
}
export const Required = (objCheck, checkValue = null, message) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement)
  if (!inputElement.value) {
    errorElement.innerText = message || "Please fill out this field!";
    addClass(errorElement);
    return false;
  }
  return true;
}

export const Checked = (objCheck, checkValue = null, message) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement)
  if (!inputElement.checked) {
    errorElement.innerText = message || "Please check this field!";
    addClass(errorElement);
    return false;
  }
  return true;
}

export const PhoneNumber = (objCheck, checkValue = null, message) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement)
  const regex = /(0[3|5|7|8|9])+([0-9]{8})\b/;
  if (!regex.test(inputElement.value)) {
    errorElement.innerText = message || "Please enter a valid phone number!";
    addClass(errorElement);
    return false;
  }
  return true;
}


export const Password = (objCheck, checkValue = null, message) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement)
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  if (!regex.test(inputElement.value)) {
    errorElement.innerText = message || 'Password are 8-16 characters, including lowercase, uppercase, numbers and special characters!';
    addClass(errorElement);
    return false;
  }
  return true;
}

export const Email = (objCheck, checkValue = null, message) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement)
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(inputElement.value)) {
    errorElement.innerText = message || 'Please enter a valid email!';
    addClass(errorElement);
    return false;
  }
  return true;
}

export const Confirm = (objCheck, checkValue, message) => {
  let checkElement = getInputElm(checkValue);
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement);
  if (inputElement.value !== checkElement.value) {
    errorElement.innerText = message || 'Confirm does not match!';
    addClass(errorElement);
    return false;
  }
  return true;
}

export const notIs = (objCheck, checkValue, message) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement);
  if (inputElement.value === checkValue) {
    errorElement.innerText = message || 'Data cannot be duplicated!';
    addClass(errorElement);
    return false;
  }
  return true;
}

export const MaxLength = (objCheck, checkValue, message) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement);
  if (inputElement.value.length > checkValue) {
    errorElement.innerText = message || `Input value cannot exceed ${checkValue} characters`;
    addClass(errorElement);
    return false;
  }
  return true;
}

export const clearValidate = (objCheck) => {
  let inputElement = getInputElm(objCheck);
  let errorElement = getErrorElm(inputElement);
  errorElement.innerText = "";
  errorElement.parentElement.classList.remove('invalid');
}
