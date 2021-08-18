# demo中遇到的问题及解决

## 1.ajax请求跨域

### （1）axiosins.js

1.安装axios: npm i axios

2.

```js
import axios from 'axios'
const axiosIns = axios.create({
    baseURL:"/sph",         //跨域配代理
    timeout:5000
})
axiosIns.interceptors.request.use(function(config){
    return config;
})
axiosIns.interceptors.response.use(function(response){
    return response.data
},function(error){
    return Promise.reject(error);
})

export default axiosIns;
```

### （2）api.js

```js
import axiosIns from './axiosins.js'
//获取首页三级分类
export default getBaseCategoryList(){
    return axiosIns.get('/api/product/getBaseCategoryList')
}
```

###  （3）config下的index.js

```js
import axiosIns from './axiosins.js'
//获取首页三级分类
export default getBaseCategoryList(){
    return axiosIns.get('/api/product/getBaseCategoryList')
}
```

### //跨域原理：

![跨域2](README.assets/跨域2.jpg)![跨域1](README.assets/跨域1.jpg)