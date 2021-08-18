import axiosins from './axiosins.js';

//获取首页三级分类

export function getBaseCategoryList(){
    return axiosins.get('/api/product/getBaseCategoryList')
}