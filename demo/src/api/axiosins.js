import axios from 'axios';

const axiosIns = axios.create({
    baseURL:'/shp',
    timeot:5000,
})
axiosIns.interceptors.request.use(function(config){
    return config;
})

axiosIns.interceptors.response.use(function(response){
    return response.data;
})

export default axiosIns;