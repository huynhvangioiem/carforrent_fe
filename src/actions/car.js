import {addCar, delCar, editCar, getCar, getCars} from "../api/car";
import {statusCode} from "../constants/API";


export const loadCarAction = async () => {
    let response = await getCars();
    if (response.status === statusCode.success) {
        return response.data;
    }
    return "";
}

export const addCarAction = async (carData) => {
    let response = await addCar(carData);
    if (response.status === statusCode.created) {
        return response.data;
    }
    return "";
}

export const delCarAction = async (id) => {
    let response = await delCar(id).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    return response.status === statusCode.success;
}

export const getCarAction = async (id) => {
    let response = await getCar(id).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    if(response.status === statusCode.success){
        return response.data;
    }
    return "";
}

export const updateCarAction = async (id,data) => {
    let response = await editCar(id,data).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    if(response.status === statusCode.success){
        return response.data;
    }
    return "";
}
