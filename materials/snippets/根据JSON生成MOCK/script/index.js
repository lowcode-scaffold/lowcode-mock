const path = require("path");
module.exports = {
  beforeCompile: (context) => {},
  afterCompile: (context) => {
    context.outputChannel.appendLine("compile 根据JSON生成MOCK end");
  },
};