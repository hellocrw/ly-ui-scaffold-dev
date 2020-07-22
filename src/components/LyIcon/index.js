/*
 * @Description: 自定义图标
 * @Author: admin
 * @Date: 2020-03-18 13:39:38
 * @LastEditors: admin
 * @LastEditTime: 2020-04-13 14:56:23
 */
import React, { Component } from 'react';
import { Icon } from 'antd';
import { ReactComponent as IconApp } from '@/assets/svg/app.svg';
import { ReactComponent as IconDashboard } from '@/assets/svg/dashboard.svg';
import { ReactComponent as IconIntegrate } from '@/assets/svg/integrate.svg';
import { ReactComponent as IconMiddleware } from '@/assets/svg/middleware.svg';
import { ReactComponent as IconMonitor } from '@/assets/svg/monitor.svg';
import { ReactComponent as IconRecord } from '@/assets/svg/record.svg';
import { ReactComponent as IconRoute } from '@/assets/svg/route.svg';
import { ReactComponent as IconSafe } from '@/assets/svg/safe.svg';
import { ReactComponent as IconServices } from '@/assets/svg/services.svg';
import { ReactComponent as IconSystem } from '@/assets/svg/system.svg';

// 图标列表
const iconList = {
  iconApp: IconApp,
  iconDashboard: IconDashboard,
  iconIntegrate: IconIntegrate,
  iconMiddleware: IconMiddleware,
  iconMonitor: IconMonitor,
  iconRecord: IconRecord,
  iconRoute: IconRoute,
  iconSafe: IconSafe,
  iconServices: IconServices,
  iconSystem: IconSystem,
};
const LyIcon = props => {
  const { type, ...other } = props;
  if (iconList[type]) {
    return <Icon component={iconList[type]} {...other} />;
  } else {
    return <Icon type={type} {...other} />;
  }
};

export default LyIcon;
