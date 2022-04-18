/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */

let timeout = null;

export function debounce(func, wait = 500, immediate = false) {
	// 清除定时器
	if (timeout !== null) clearTimeout(timeout);
	// 立即执行，此类情况一般用不到
	if (immediate) {
		var callNow = !timeout;
		timeout = setTimeout(function() {
			timeout = null;
		}, wait);
		if (callNow) typeof func === 'function' && func();
	} else {
		// 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
		timeout = setTimeout(function() {
			typeof func === 'function' && func();
		}, wait);
	}
}

/**
 * 深度拷贝
 * 
 */
export function deepClone (obj) {
// 对常见的“非”值，直接返回原来值
if([null, undefined, NaN, false].includes(obj)) return obj;
  if(typeof obj !== "object" && typeof obj !== 'function') {
  //原始类型直接返回
      return obj;
  }
  var o = isArray(obj) ? [] : {};
  for(let i in obj) {
      if(obj.hasOwnProperty(i)){
          o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
  }
  return o;
}


/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let timer, flag;

export function throttle(func, wait = 500, immediate = true) {
	if (immediate) {
		if (!flag) {
			flag = true;
			// 如果是立即执行，则在wait毫秒内开始时执行
			typeof func === 'function' && func();
			timer = setTimeout(() => {
				flag = false;
			}, wait);
		}
	} else {
		if (!flag) {
			flag = true
			// 如果是非立即执行，则在wait毫秒内的结束处执行
			timer = setTimeout(() => {
				flag = false
				typeof func === 'function' && func();
			}, wait);
		}
		
	}
};


/**
 * 时间格式化
 * 
 */
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
	// 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
	String.prototype.padStart = function(maxLength, fillString = ' ') {
		if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
			'fillString must be String')
		let str = this
		// 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
		if (str.length >= maxLength) return String(str)

		let fillLength = maxLength - str.length,
			times = Math.ceil(fillLength / fillString.length)
		while (times >>= 1) {
			fillString += fillString
			if (times === 1) {
				fillString += fillString
			}
		}
		return fillString.slice(0, fillLength) + str;
	}
}

function timeFormat(timestamp = null, fmt = 'yyyy-mm-dd') {
	// 其他更多是格式化有如下:
	// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
	timestamp = parseInt(timestamp);
	// 如果为null,则格式化当前时间
	if (!timestamp) timestamp = Number(new Date());
	// 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
	if (timestamp.toString().length == 10) timestamp *= 1000;
  console.log('timestamp',timestamp)
	let date = new Date(timestamp);
  console.log(date);
	let ret;
	let opt = {
		"y+": date.getFullYear().toString(), // 年
		"m+": (date.getMonth() + 1).toString(), // 月
		"d+": date.getDate().toString(), // 日
		"h+": date.getHours().toString(), // 时
		"M+": date.getMinutes().toString(), // 分
		"s+": date.getSeconds().toString() // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

export default timeFormat


