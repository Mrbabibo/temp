
import Router from 'vue-router'
 import Hello from '../components/Hello'
/**
 * 全局路由
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/',
        name: 'Hello',
        component:  Hello
    }
];

export default new Router({
    mode: 'hash', /** 后端支持可开**/
    routes: constantRoutes
});
