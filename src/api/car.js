import * as axiosService from "../service/axiosService";
import {apiUrl} from "../constants/API";

const endpoint=  "cars";

export const getCars = () => {
  return axiosService.getApi(`${apiUrl}/${endpoint}`);
}

export const addCar = ($data) => {
    return axiosService.postApi(`${apiUrl}/${endpoint}`,$data);
}

export const delCar = (id) => {
  return axiosService.deleteApi(`${apiUrl}/${endpoint}/${id}`);
}

export const getCar = (id) => {
    return axiosService.getApi(`${apiUrl}/${endpoint}/${id}`);
}

export const editCar = (id,$data) => {
    return axiosService.putApi(`${apiUrl}/${endpoint}/${id}`,$data);
}
