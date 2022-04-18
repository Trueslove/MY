import { navigateToLogin } from '@/common/utils/utils.js';
// import store from '@/store/index';
import { dev_host, mock_host, product_host, needProductUrl } from '../config.js';

export default class Request {
    config = {
        baseUrl: '',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success() {},
        fail() {},
        complete() {}
    }

    static posUrl(url) { /* 判断url是否为绝对路径 */
        return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
    }

    interceptor = {
        request: (f) => {
            if (f) {
                this.requestBeforeFun = f
            }
        },
        response: (f) => {
            if (f) {
                this.requestComFun = f
            }
        }
    }


    static requestBeforeFun(config) {
        return config
    }

    static requestComFun(response) {
        return response
    }

    setConfig(f) {
        this.config = f(this.config)
        return this
    }

    testNeedProductUrl(url){
      return needProductUrl.findIndex(ele => ele == url) != -1;
    }

    request(options = {}) {
        if(this.testNeedProductUrl(options.url)){
          options.baseUrl = product_host + '/api';
        }else{
          options.baseUrl = options.baseUrl || this.config.baseUrl;
        }
        options.dataType = options.dataType || this.config.dataType;
        if(options.url == undefined) return Promise.reject();
        options.url = Request.posUrl(options.url) ? options.url : (options.baseUrl + options.url);
        options.data = options.data || {};
        options.header = options.header || this.config.header;
        options.method = options.method || this.config.method;
        if (options['Content-Type']) options.header['Content-Type'] = options['Content-Type'];
        return new Promise((resolve, reject) => {
            let next = true
            let _config = null
            options.complete = (response) => {
                let statusCode = response.statusCode
                response.config = _config
                response = this.requestComFun(response)
                let i18n = global.i18n;
                if (statusCode != 200) {
                    let errMessage = '';
                    switch (statusCode) {
                        case 400:
                            errMessage = '请求错误(400)';
                            break;
                        case 401:
                            errMessage = '未授权，请重新登录(401)';
                            uni.showToast({
                                title: '登录失效',
                                icon: 'none',
                                position: 'bottom',
                                duration: 1500
                            })
                            // store.commit('logout');
                            break;
                        case 403:
                            errMessage = '拒绝访问(403)';
                            break;
                        case 404:
                            errMessage = '请求出错(404)';
                            break;
                        case 408:
                            errMessage = '请求超时(408)';
                            break;
                        case 500:
                            errMessage = '服务器错误(500)';
                            break;
                        case 501:
                            errMessage = '服务未实现(501)';
                            break;
                        case 502:
                            errMessage = '网络错误(502)';
                            break;
                        case 503:
                            errMessage = '服务不可用(503)';
                            break;
                        case 504:
                            errMessage = '网络超时(504)';
                            break;
                        case 505:
                            errMessage = 'HTTP版本不受支持(505)';
                            break;
                        default:
                            errMessage = "服务器错误!";
                            break;
                    }

                    if (statusCode != 401) {
                        uni.showToast({
                            title: errMessage,
                            icon: 'none',
                            position: 'bottom',
                            duration: 1500
                        })
                        uni.$emit('netWorkError', { msg: '服务器太拥挤了~请您稍后重试' })
                    }
                    reject({ statusCode, errMessage })
                } else {
                    let _code = response.data.code;
                    if (_code == '2' ||  _code == '-1' ) {
                        uni.showToast({
                            title: '登录失效，请重新登录',
                            icon: 'none',
                        })
                        // store.commit("logout");
                        navigateToLogin();
                    } else {
                        resolve(response)
                    }
                }
                uni.stopPullDownRefresh();
            }
            let cancel = (t = 'handle cancel') => {
                let err = {
                    errMsg: t,
                    config: afC
                }
                reject(err)
                next = false
            }
            let afC = {...this.config, ...options }
            _config = {...afC, ...this.requestBeforeFun(afC, cancel) }
            if (!next) return
            uni.request(_config)
        })
    }

    get(url, data, options = {}) {
        options.url = url
        options.data = data
        options.method = 'GET'
        return this.request(options)
    }

    post(url, data, options = {}) {
        options.url = url
        options.data = data
        options.method = 'POST'
        return this.request(options)
    }
}
