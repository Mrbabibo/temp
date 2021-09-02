import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import 'echarts/map/js/china' 
import VueRouter from 'vue-router'
Vue.prototype.$echarts = echarts
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
Vue.use(Element)

Vue.config.productionTip = false

import router from '../src/router/index';

Vue.use(VueRouter)
/* api统一出口 */
import apis from '../src/apis/index';
Vue.prototype.$api = apis;
//全局变量

import GLOBAL from '../src/apis/global';
Vue.prototype.$global = GLOBAL;
Vue.prototype.$EventBus = new Vue(); 
new Vue({ router, render: h => h(App) }).$mount('#app');

