import axios from "axios";


const token = null;

/***************************/
const redirectTo = (document, path) => {
    document.location = path;
};
const handleSuccess = (response) => {
    return response;
}
const handleError = (error) => {
    switch (error.response.status) {
        case 401:
            redirectTo(document, '/login');
            break;
        default:
            return Promise.reject(error);
    }
}
/************************/

// create axios instance
const service = axios.create({
    headers: token ? {'Authorization': `Bearer ${token}`} : {}
});

// Add a response interceptor
service.interceptors.response.use(handleSuccess, handleError);


export const getApi = (endpoint) => {
    return service.get(endpoint);
}

export const postApi = (endpoint, payload) => {
    return service.request({
        method: 'POST',
        url: endpoint,
        responseType: 'json',
        data: payload
    });
}
