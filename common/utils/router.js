import {
  LOGIN_PAGE_URL
} from '../config.js'
export default class Router {

  needLoginPages = []

  constructor(options) {
    if (options) this.needLoginPages = options.needLoginPages || [];

  }
  splicingUrl(res) {
    return typeof res === 'string' ? res : res.params ? res.url + '?' + Object.keys(res.params).map(item =>
      `${item}=${res.params[item]}`).join('&') : res.url;
  }

  testingNeedLogin(url) {
    return this.needLoginPages.findIndex(item => item == url || url.startsWith(item)) != -1
  }

  getNeedLoginPages() {
    return this.needLoginPages
  }

  switchTab(url) {
    url = this.splicingUrl(url)
    if (this.testingNeedLogin(url)) {
      if (global.token) {
        uni.switchTab({
          url
        });
      } else {
        uni.navigateTo({
          url: LOGIN_PAGE_URL
        })
      }
      return false;
    }
    uni.switchTab({
      url
    });
  }

  redirectTo(url) {
    url = this.splicingUrl(url)
    if (this.testingNeedLogin(url)) {
      uni.redirectTo({
        url: global.token ? url : LOGIN_PAGE_URL
      });
      return false;
    }
    uni.redirectTo({
      url
    });
  }

  reLaunch(url) {
    uni.reLaunch({
      url
    });
  }

  navigateBack() {
    uni.navigateBack();
  }

  navigateTo(url) {
    url = this.splicingUrl(url)
    if (this.testingNeedLogin(url)) {
      uni.navigateTo({
        url: global.token ? url : LOGIN_PAGE_URL
      });
      return false;
    }
    uni.navigateTo({
      url
    });
  }
}
