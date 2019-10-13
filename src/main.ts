import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';

// Plugins
import './plugins/bootstrap-vue';
import './plugins/vue-unicons';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
