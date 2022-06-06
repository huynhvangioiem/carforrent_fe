import * as axiosService from "../service/axiosService";

const endpoint = "users";

export const loginAPI = (data) => {
  return axiosService.postApi("https://testapi.io/api/huynhvangioiem/login", data);
}
