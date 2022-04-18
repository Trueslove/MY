import Vue from 'vue';
import App from './App';
import apiUrls from '@/common/api/url.js' // 不懂
import { http } from '@/common/api/index.js';
import { message, Router,validate } from '@/common/utils/index.js';
import { IMG_BASE_URL, SYSTEM_CONFIG, PAGE_SIZE, VERSION_CODE, IS_DEV, needLoginPages, API_BASE_URL } from '@/common/config.js';
import utils from '@/common/utils/utils';
import './common/filter/index.js';
import './common/mixin/index.js';
const router = new Router({ needLoginPages });

// #ifdef APP-PLUS
import FuModal from '@/components/mo-modal/mo-modal.js';
Vue.use(FuModal);
// #endif


Vue.config.productionTip = false;


Vue.prototype.$urouter = router;
Vue.prototype.$api = http;
Vue.prototype.$message = message;
Vue.prototype.$util = utils;
Vue.prototype.$validate = validate;

global.apiUrls = apiUrls;
global.IS_DEV = IS_DEV == 0 ? 0 : 1;
global.PAGE_SIZE = PAGE_SIZE;
global.VERSION_CODE = VERSION_CODE;
global.SYSTEM_CONFIG = SYSTEM_CONFIG;
global.IMG_BASE_URL = IMG_BASE_URL;
global.API_BASE_URL = API_BASE_URL;
App.mpType = 'app';

const app = new Vue({
    ...App
});

app.$mount();

global.$showModal = app.$showModal;
