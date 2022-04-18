// export const dev_host = 'https://tszhoumo.com'; // 开发环境域名
export const dev_host = 'http://120.79.73.85'; // 开发环境域名
export const product_host = 'http://120.79.73.85'; // 生产环境域名

export const IS_DEV = 1;                              // 0:生产环境 1:开发环境 2:mock环境
export const PAGE_SIZE = 15;                          // 分页配置 每页条数

const host = IS_DEV == 2 ?  dev_host : product_host; // 项目中接口地址host
export const WEBSOCKET = '';
export const SHAREURL = host + '/h5/#/'; // 分享的H5地址
export const SERIAL = '{serial}'; // 项目序列号(千万千万千万不要修改!!!!)

export const BASE_URL = `${host}/api/`;                    // 基础路径
export const API_BASE_URL = `${host}/api/`;            // 接口请求基础路径

export const IMG_BASE_URL = `${host}/media/`;        // 图片基础路径 公共filters assembleImgSrc依赖此配置
// #ifdef APP-PLUS || H5
export const LOGIN_PAGE_URL = '/pages/user/login-password/index'; // 登录页面路由 request.js 依赖此配置 主要用于登录失效跳转
// #endif
// #ifdef MP-WEIXIN
export const LOGIN_PAGE_URL = '/pages/user/login-password/index'; // 登录页面路由 request.js 依赖此配置 主要用于登录失效跳转
// #endif

const _platform = uni.getSystemInfoSync().platform;

export const SYSTEM_CONFIG = {                       // 系统配置
  logo: '/static/logo.png',
  appName: '一元夺宝',
  appVersion: '1.0.0',
  // #ifdef APP-PLUS
  platform: _platform === 'android' ? 'Android' : 'IOS',
  // #endif
  // #ifdef H5
  platform: 'Web',
  // #endif
  // #ifdef MP-WEIXIN
  platform: 'Wechat',
  // #endif
  // #ifdef MP-ALIPAY
  platform: 'Alipay',
  // #endif
  // #ifdef MP-BAIDU
  platform: 'Baidu',
  // #endif
  // #ifdef MP-TOUTIAO
  platform: 'ByteBounce',
  // #endif
  // #ifdef MP-360
  platform: '360',
  // #endif
  // #ifdef QUICKAPP-WEBVIEW
  platform: 'FastApp',
  // #endif
}

export const needProductUrl = [

];

export const needLoginPages = [
]
