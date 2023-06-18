const path = require("path");
module.exports = {
  beforeCompile: (context) => {},
  afterCompile: (context) => {
    context.outputChannel.appendLine("compile 根据YAPI接口信息生成MOCK end");
  },
};