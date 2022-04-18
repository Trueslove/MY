import { LOGIN_PAGE_URL } from '../config.js';
import { throttle } from './function.js';
import { debounce } from './function.js';
import { timeFormat } from './function.js';
import { timeFrom } from './function.js';
import { deepClone } from './function.js';

/**
 * @description showModal 弹窗封装
 * @param {Object} options = 参数同 uni-app 官方用法
 * */
function showModal(options){
  // #ifndef APP-PLUS
  uni.showModal(options);
  // #endif
  // #ifdef APP-PLUS
  if(uni.getSystemInfoSync().platform === 'android'){
    global.$showModal(options)
    .then(res => {
    	console.log('RES',res);
    	//确认
    }).catch(err => {
    	//取消
    	console.log('ERR',err);
    })
  }else{
    uni.showModal(options);
  }
  // #endif
}

/**
 * @description 验证登录权限,接受一个回调函数,登录则执行回调函数,非登录状态则跳转登录页
 * @param {Function} cb = 回调函数
 * */
function actionAuth(cb) {
  console.log(global.token,2222)
  if (global.token) {
    cb && cb(global.token);
  } else {
    navigateToLogin();
  }
}

/**
 * @description 判断是app端还是小程序端登录
 * */
let timer = null; // 登录页跳转防抖
function navigateToLogin() {
  if(timer) clearTimeout(timer);
  timer = setTimeout(() => {
    const pages = getCurrentPages();
    if(pages.length != 0){
    	  const lastPage = '/' + pages.pop().route;
    	  let url = LOGIN_PAGE_URL;
    	  if (lastPage == url) return;
    	  uni.navigateTo({
    	    url
    	  });
    }else{
    	  uni.switchTab({
    	  	url: '/pages/tab/home/shopindex'
    	  })
    }
  },200)
}

/**
 * @description 倒计时计算
 * */
function downTime(time) {
  var days = parseInt(time / (1000 * 60 * 60 * 24));
  var hours = parseInt(time / (1000 * 60 * 60) % 24);
  var minutes = parseInt(time / (1000 * 60) % 60);
  var seconds = parseInt(time / 1000 % 60);
  return {
    days,
    hours: hours < 10 ? '0' + hours : hours,
    minutes: minutes < 10 ? '0' + minutes : minutes,
    seconds: seconds < 10 ? '0' + seconds : seconds,
  }
}

/**
 * @description 参数序列化
 * */
function serialize(data) {
  let str = '';
  Object.keys(data).forEach(key => {
    str += key + '=' + data[key] + '&'
  })
  str = str.substr(0, str.length - 1);
  return str;
}

/**
 * @description 设置状态栏颜色
 * @param {String} color dark or light
 * @example this.$util.setNavigationBarColor('dark');
 * */
function setNavigationBarColor(color) {
  if (color == 'dark') {
    // #ifdef APP-PLUS
    plus.navigator.setStatusBarStyle('dark');
    // #endif
    // #ifdef MP-WEIXIN
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FFFFFF'
    })
    // #endif
  } else if (color == 'light') {
    // #ifdef APP-PLUS
    plus.navigator.setStatusBarStyle('light');
    // #endif
    // #ifdef MP-WEIXIN
    wx.setNavigationBarColor({
      frontColor: '#FFFFFF',
      backgroundColor: '#000000'
    })
    // #endif
  }
}

/**
 * base64图片缓存到本地,返回本地路径
 * */
function base64ToPath(base64) {
  return new Promise(function(resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      base64 = base64.split(',')
      var type = base64[0].match(/:(.*?);/)[1]
      var str = atob(base64[1])
      var n = str.length
      var array = new Uint8Array(n)
      while (n--) {
        array[n] = str.charCodeAt(n)
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
        type: type
      })))
    }
    var extName = base64.match(/data\:\S+\/(\S+);/)
    if (extName) {
      extName = extName[1]
    } else {
      reject(new Error('base64 error'))
    }
    var fileName = Date.now() + '.' + extName
    if (typeof plus === 'object') {
      var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
      bitmap.loadBase64Data(base64, function() {
        var filePath = '_doc/uniapp_temp/' + fileName
        bitmap.save(filePath, {}, function() {
          bitmap.clear()
          resolve(filePath)
        }, function(error) {
          bitmap.clear()
          reject(error)
        })
      }, function(error) {
        bitmap.clear()
        reject(error)
      })
      return
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
        encoding: 'base64',
        success: function() {
          resolve(filePath)
        },
        fail: function(error) {
          reject(error)
        }
      })
      return
    }
    reject(new Error('not support'))
  })
}


module.exports = {
  actionAuth,
  navigateToLogin,
  serialize,
  debounce,
  throttle,
  timeFormat,
  timeFrom,
  deepClone,
  downTime,
  setNavigationBarColor,
  base64ToPath,
  showModal
}
