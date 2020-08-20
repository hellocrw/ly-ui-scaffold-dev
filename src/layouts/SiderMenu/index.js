import React from 'react';
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';
import { getFlatMenuKeys } from './SiderMenuUtils';

const SiderMenuWrapper = React.memo(props => {
  const { menuData, collapsed, onCollapse } = props;
  // menuData 路由文件配置信息
  const flatMenuKeys = getFlatMenuKeys(menuData);    
  return <SiderMenu {...props} flatMenuKeys={flatMenuKeys} />;
});

export default SiderMenuWrapper;
