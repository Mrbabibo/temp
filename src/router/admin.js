
import Router from 'vue-router'
import baseDate from '../map'
/**
* 全局路由
* a base page that does not have permission requirements
* all roles can be accessed
*/
export const constantRoutes = [
   {
       path: '/',
       name: 'basedate',
       component:  baseDate
   }

];

export default new Router({
   mode: 'hash', /** 后端支持可开**/
   routes: constantRoutes
});
