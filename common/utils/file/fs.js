// #ifdef APP-PLUS
// 获取文件内容
async function getFileContext(path, dirEntry) {
  let deffered;
  let fileReader = new plus.io.FileReader();
  fileReader.onloadend = function(evt) {
    deffered(evt.target.result);
  }
  let file = await getFile(path, dirEntry);
  fileReader.readAsText(file, 'utf-8');
  return new Promise((resolve) => {
    deffered = resolve;
  });
}
// 获取文件
async function getFile(fileName, dirEntry) {
  return new Promise(async (resolve) => {
    let fileEntry = await getFileEntry(fileName, dirEntry);
    fileEntry.file(function(file) {
      resolve(file);
    });
  })
}
// 获取文件
async function getFileEntry(fileName, dirEntry) {
  return new Promise((resolve) => {
    plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
      let entry = dirEntry || fs.root;
      entry.getFile(fileName, {
        create: true
      }, function(fileEntry) {
        resolve(fileEntry);
      });
    });
  })
}
// #endif
// #ifdef MP-WEIXIN
async function getFileContext(path, dirEntry) {
  let FileSystemManager = wx.getFileSystemManager();
  let content = FileSystemManager.readFileSync(path,'utf-8');
  return content;
}
// #endif

function initI18n(){
  return Promise.resolve();

}

export default {
  getFileContext,
  initI18n,
}
