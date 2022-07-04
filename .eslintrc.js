// ESlint 配置文件遵循commonJS的导出规则, 所导出的对象就是ESlint的配置对象
module.exports = {
  // 表示当前目录即为根目录, ESlint规则限制在该目录下
  root: true,
  // 启动ESlint检测的环境
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  // 错误级别分为3种 off 或 0 关闭 / warn 或 1 警告 / error 或 2 程序退出
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
