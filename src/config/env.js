/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 项目域名地址
 *
 */

let baseUrl = '';
const env = process.env;
if (env.NODE_ENV === 'development') {
    baseUrl = `/a/dpk/prov/`;// 开发环境地址
} else if (env.NODE_ENV === 'production') {
    baseUrl = `./`;// 生产环境地址
}

module.exports = {
    baseUrl,
    env
};
