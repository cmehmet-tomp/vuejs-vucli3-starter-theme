import Vue from 'vue';
import Vuex from 'vuex';

// Authentication - Registration - Login 
import auth from './auth/'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'
export const store = new Vuex.Store({
    modules: {
        auth
    },
    strict: debug  
});
