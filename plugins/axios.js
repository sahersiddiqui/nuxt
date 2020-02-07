import axios from 'axios'
import { Message } from 'element-ui'

const service =
    axios.create({
        baseURL: process.env.baseUrl,
        // timeout: 10000,
        // headers: { 'Access-Control-Allow-Origin': '*', 'X-Powered-By': 'Express', 'Accept': 'application/json, text/plain, */*' }
    })
service.defaults.headers.common['Accept'] = 'application/json, text/plain, */*';

// Add a request interceptor
service.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error

    return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error);
});
// // Add a response interceptor
// config.interceptors.response.use(function(response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
// }, function(error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     // this.$message("Somethign went wrong");
//     return Promise.reject(error);
// })

export default service