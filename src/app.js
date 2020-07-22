import { animationFramePolyfill } from '@/utils/utils';
import React from 'react';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
animationFramePolyfill();

moment.locale('zh-cn');

const ConfigLocale = props => {
  return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>;
};

export function rootContainer(container) {
  return React.createElement(ConfigLocale, null, container);
}

// export const qiankun = {
//   // 应用加载之前
//   async bootstrap(props) {
//     console.log('app1 bootstrap', props);
//   },
//   // 应用 render 之前触发
//   async mount(props) {
//     console.log('app1 mount', props);
//   },
//   // 应用卸载之后触发
//   async unmount(props) {
//     console.log('app1 unmount', props);
//   },
// };
