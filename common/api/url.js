const publicApi = {
}
const modulesFiles = require.context('../../pages/',true,/\api.js$/);
const modules = modulesFiles.keys().reduce((modules,modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/,'$1');
  const value = modulesFiles(modulePath);
  Object.assign(modules,value.default);
  return modules;
},publicApi);
export default modules;

/**
 * 如果是第一套代码,删掉下面的对象即可
 * 如果不是第一套代码,导出下面的对象即可
 * 如果哪一套的代码都有,下面的对象合并到上面的对象即可
 * */

const del = {}
