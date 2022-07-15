import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default (history = null) => {

    const API_URL = "https://test.accura-tech.com";

    let headers: any = {};

    if (localStorage.access_token) {
        headers.Authorization = `Bearer ${localStorage.access_token}`;
    }

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: API_URL,
        headers,
    });

    axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig<any>) => {

        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            config.headers = {
                Authorization: `Bearer ${access_token}`
            };
        }

        return config;
    },
        error => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        (response: AxiosResponse<any, any>) =>
            new Promise((resolve, reject) => {
                resolve(response);
            }),
        async (error) => {
            if (!error.response) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

            if (error.response.status === 401) {

              
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        }
    );

    return axiosInstance;

}
 
