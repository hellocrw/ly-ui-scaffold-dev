const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/**
 * memo，当前 webpack-chain对象
 * env，当前环境，development、production 或 test 等
 * webpack，webpack 实例，用于获取其内部插件
 * createCSSRule，用于扩展其他 CSS 实现，比如 sass, stylus
 * @param {*} memo
 * @param {*} { env, webpack, createCSSRule }
 */
const webpackConfig = (memo, { env, webpack, createCSSRule }) => {
  // 设置 alias
  // memo.resolve.alias.set('foo', '/tmp/a/b/foo');
  memo.plugin('lodash-webpack-plugin').use(LodashModuleReplacementPlugin, [{ paths: true }]);
};

export default webpackConfig;
