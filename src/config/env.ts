import * as process from 'process'
/**
 * 配置编译环境和线上环境之间的切换
 * protocol: 协议
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * 
 */
const protocol = 'http'
const baseUrl = process.env.API_ROOT; 
const routerMode = 'hash';

export {
	protocol,
	baseUrl,
	routerMode
}