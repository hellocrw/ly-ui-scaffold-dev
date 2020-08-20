// ref: https://umijs.org/config/
import { defineConfig, utils } from 'umi';
import webpackConfig from './webpack.config';
const { winPath } = utils;

import { primaryColor } from './defaultSettings';
import routes from './routes';

export default defineConfig({
  plugins: [
    // ['@umijs/plugin-qiankun'],
    //   [
    //     'umi-plugin-pro-block',
    //     {
    //       moveMock: false,
    //       moveService: false,
    //       modifyRequest: true,
    //       autoAddMenu: true,
    //     },
    //   ],
    // './config/blocks',
  ],
  title: '联奕科技',
  antd: {},
  dva: {
    hmr: true,
  },
  // locale: {
  //   // default false
  //   default: 'zh-CN',
  //   // default zh-CN
  //   baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
  // },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  // dynamicImport: undefined, // 暂时不使用，懒加载ie10下报错
  targets: {
    ie: 9,
  },
  hash: true,
  /**
   * 路由相关配置
   * 
   */
  // TODO 加载路由配置
  routes: routes,

  history: {
    type: 'hash',
  },
  mountElementId: 'root',
  // base: '/app1',
  // outputPath: `./dist/app1`,
  publicPath: `./`,
  /**
   * webpack 相关配置
   */
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  externals: {
    // '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    // 这里的 modules 可以接受 getLocalIdent
    modules: {
      getLocalIdent: (context, _, localName) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          let arr = winPath(antdProPath)
            .split('/')
            .map(a => a.replace(/([A-Z])/g, '-$1'))
            .map(a => a.toLowerCase());
          arr = arr.filter(i => i != '');
          return `${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }
        return localName;
      },
    },
  },
  proxy: {
    '/login': {
      target: 'http://192.168.35.105:1101',
      secure: false,
      changeOrigin: true,
    },
    '/logout': {
      target: 'http://192.168.35.105:1101',
      secure: false,
      changeOrigin: true,
    },
  },
  chainWebpack: webpackConfig,
});
