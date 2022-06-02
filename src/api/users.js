import * as axiosService from "../service/axiosService";
import {apiUrl} from "../constants/API"

const endpoint = "users";

export const getUsers = () => {
    return axiosService.getApi(`${apiUrl}/${endpoint}`);
}

export const addUser = (data) => {
    return axiosService.postApi(`${apiUrl}/${endpoint}`, data);
}
