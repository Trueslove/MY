## 项目目录结构
+ common
  + api
    + index.js `http请求入口`
    + request.js `http请求封装`
    + url.js `api统一管理文件`
  + filter
    + index.js `全局过滤器`
      + assembleImgSrc `图片路径补全`
      + formatDate `日期格式转换`
  + monction
    + debounce `防抖函数`
    + deepClone `深度克隆`
    + throttle `节流函数`
    + timeFormat `日期格式化`
  + mixin
    + index `全局混入`
    + paging_list `上拉加载,下拉刷新,有需要的地方单独混入`
  + utils
    + index.js `公共方法入口文件`
    + message.js `toast弹窗封装`
    + router.js `路由跳转方法封装`
    + upload-image.js `上传图片到服务器`
    + utils.js `常用工具函数`
    + validate.js `常用正则验证`
  + config.js `APP配置文件`
+ components
+ static `静态资源`
  + tab `底部Tabbar用到的图片`
+ store
  + index.js ``
+ style
  + common.scss `自定义样式`
  + main.css `colorUI的主样式文件`
+ .editorconfig `编辑器配置文件`
+ .gitignore `git忽略文件`
+ App.vue `项目入口文件`
+ main.js `项目启动文件`
+ manifest.json `项目配置文件`
+ pages.json `页面配置文件`
+ uni.scss `内置样式`


## 组件开发规范
+ 公共组件统一放入`components`文件夹下
+ 组件中使用的静态资源统一放入`static`文件夹下
+ 组件中一定要写说明文档,包含作者,说明,接收参数,使用示例等,具体参考`mo-button`组件

## 编码规范
+ 变量
	+ 使用驼峰命名法
	+ 所有变量都应有注释,多态变量要有详细说明
	+ example
```js
data(){
  return {
    id: '896', // 商品ID,数据从哪来,数据类型
    type: 0, // 0: 普通商品 1: 秒杀商品 2: 拼团商品
  }
}
```
+ 常量
	+ 全部大写
	+ 使用下划线链接
+ 方法
	+ 使用驼峰命名
	+ 每个方法都应有注释,使用文档注释类型,复杂函数内部须有逻辑判断注释,详细说明处理步骤
	+ example
