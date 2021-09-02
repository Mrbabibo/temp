import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import 'echarts/map/js/china' 
import VueRouter from 'vue-router'
Vue.prototype.$echarts = echarts
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/icon/iconfont'
Vue.use(Element)

Vue.config.productionTip = false

import router from '../../router/index';

Vue.use(VueRouter)
/* api统一出口 */
import apis from '../../apis/index';
Vue.prototype.$api = apis;
//全局变量

import GLOBAL from '../../apis/global';
Vue.prototype.$global = GLOBAL;
new Vue({ router, render: h => h(App) }).$mount('#app');

