import Vue from 'vue';
import store from "./store";
//Main pages
import App from './views/App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = new Vue({
    el: '#app',
    store,
    components: { App }
});
