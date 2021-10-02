import axios from "axios";

const HTTPClient = axios.create({
  baseURL: `${process.env.URL_BASE}`
});

// HTTPClient.interceptors.request.use((config) => {
//     const token = localStorage.getItem('TOKEN')
//     if (token) {
//         config.headers.common.Authorization = `Bearer ${token}`;
//     }
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })

// HTTPClient.interceptors.response.use(response => {
//     return response;
// }, error => Promise.reject(error));

export { HTTPClient };
