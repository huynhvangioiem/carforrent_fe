import * as axiosService from "../service/axiosService";

const endpoint = "users";

export const login = (data) => {
  return axiosService.postApi("https://testapi.io/api/huynhvangioiem/login", data);
}
