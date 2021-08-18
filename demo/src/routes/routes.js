
import page404 from '../pages/page404.vue'


export default [
    {path:'/404',component:page404},
    {path:'*',redirect:'/404'}
]