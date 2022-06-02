import {Email, Password, Required} from "../helpers/validation";

export const loginValidationRuleData = [
    {
        "objName": "#email",
        "rules": [{"function": Required}]
    },
    {
        "objName": "#password",
        "rules": [{"function": Required}]
    },
]
