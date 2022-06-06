import {loginAPI} from "../api/auth";
import {statusCode} from "../constants/API"
import {setLocalStorage} from "../service/localStorageService";
import {localStorageUserLoginKey} from "../constants";
import {useGlobalData} from "../store/GlobalDataProvider";

export const loginAction = async (loginData) => {
  let response = await loginAPI(loginData);
  if(response.status === statusCode.success){
    setLocalStorage(localStorageUserLoginKey,response.data);
    return response.data;
  }
  return "";
}
