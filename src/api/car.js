import * as axiosService from "../service/axiosService";
import {apiUrl} from "../constants/API";

const endpoint=  "cars";

export const getCars = () => {
  return axiosService.getApi(`${apiUrl}/${endpoint}`);
}
