/*
 * @Description: 空白布局
 * @Author: admin
 * @Date: 2020-03-06 09:45:51
 * @LastEditors: admin
 * @LastEditTime: 2020-03-20 18:40:55
 */
import React from 'react';
import { Layout } from 'antd';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';
import { connect } from 'umi';
import { matchParamsPath, getRouterAuthority } from '@/utils/utils';
import SiderMenu from '../SiderMenu';
import Context from '../MenuContext';
import { Scrollbars } from '@/components';
const { Content } = Layout;

class BlankLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.matchParamsPath = memoizeOne(matchParamsPath, isEqual);
    this.getPageTitle = memoizeOne(this.getPageTitle);
  }

  componentDidMount() {
    const {
      dispatch,
      route: { routes, authority },
    } = this.props;
    dispatch({
      type: 'setting/getSetting',
    });
    dispatch({
      type: 'menu/getMenuData',
      payload: { routes, authority },
    });
  }

  // 传递props
  getContext() {
    const { location, windowH } = this.props;
    return {
      location,
      windowH,
    };
  }

  // 设置页面标题
  getPageTitle = (pathname, breadcrumbNameMap) => {
    const currRouterData = this.matchParamsPath(pathname, breadcrumbNameMap);
    const { appTitle } = this.props;
    if (!currRouterData) {
      return appTitle;
    }
    const pageName = currRouterData.name;
    const title = `${pageName} - ${appTitle}`;
    setTimeout(() => {
      document.title = title;
    });
  };

  render() {
    const {
      children,
      location: { pathname },
      route: { routes },
      breadcrumbNameMap,
    } = this.props;
    const routerConfig = getRouterAuthority(pathname, routes);
    this.getPageTitle(pathname, breadcrumbNameMap);

    return (
      <React.Fragment>
        <Context.Provider value={this.getContext()}>
          <div className="ly-layout-blank">{children}</div>
        </Context.Provider>
      </React.Fragment>
    );
  }
}

export default connect(({ global, setting, menu }) => ({
  windowH: global.windowH,
  breadcrumbNameMap: menu.breadcrumbNameMap,
  ...setting,
}))(BlankLayout);
