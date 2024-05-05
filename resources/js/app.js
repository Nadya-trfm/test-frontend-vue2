import Vue from 'vue';
import store from "./store";
//Main pages
import App from './views/App.vue';


const app = new Vue({
    el: '#app',
    store,
    components: { App }
});
