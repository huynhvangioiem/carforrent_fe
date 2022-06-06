import {Email, Password, Required} from "../helpers/validation";

export const addCarValidationRuleData = [
    {
        "objName": "#brand",
        "rules": [{"function": Required}]
    },
    {
        "objName": "#description",
        "rules": [{"function": Required}]
    },
    {
        "objName": "#price",
        "rules": [{"function": Required}]
    },
    {
        "objName": "#img",
        "rules": [{"function": Required}]
    },
]
