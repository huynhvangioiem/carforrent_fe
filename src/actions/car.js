import {getCars} from "../api/car";
import {statusCode} from "../constants/API";
import {useGlobalData} from "../store/GlobalDataProvider";


export const loadCarAction = async () => {
  let response = await getCars();
  if(response.status === statusCode.success){
    return response.data;
  }
  return "";
}
