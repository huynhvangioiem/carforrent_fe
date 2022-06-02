import {addUser} from "../api/users";

export const addUserAction = (userData) => {
    return addUser(userData)
}
