import * as process from 'process'
/**
 * 配置编译环境和线上环境之间的切换
 * protocol: 协议
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * 
 */
const protocol = 'http'
let baseUrl = '//private-f78bc-chungeshudong.apiary-mock.com';
const routerMode = 'hash';
// console.log('env: ', process.env.NODE_ENV)
// if(process.env.NODE_ENV === 'development') {
// 	baseUrl = '//private-f78bc-chungeshudong.apiary-mock.com'; 
// } else {
// 	// 生产环境服务器IP未知
// 	baseUrl = ''
// }

export {
	protocol,
	baseUrl,
	routerMode
}