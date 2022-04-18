import Vue from 'vue';

// 识别图片路径是否为全路径 若不是则进行拼接
Vue.filter('assembleImgSrc', src => {
    src = src || ''
    if (src.indexOf('http://') != -1 || src.indexOf('https://') != -1) {
        return src
    }
    if (src.indexOf('/uploads/') != -1 || src.indexOf('/uploads/') != -1) {
        return BASE_URL + src
    } else {
        return IMG_BASE_URL + src
    }
});
