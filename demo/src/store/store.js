import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
 
import home from './modules/home'
export default new Vuex.Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules:{
        home
    },
})
