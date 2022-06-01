import {Checked, Confirm, Email, Password, PhoneNumber, Required} from "../helpers/validation";

export const registerValidatesData = [
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
    "rules": [{"function": Confirm, checkValue: "#password", message: "Password confirm not match!"}]
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
