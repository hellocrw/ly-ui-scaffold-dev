import React, { PureComponent, Suspense } from 'react';
import { Layout, Icon } from 'antd';
import classNames from 'classnames';
import Debounce from 'lodash-decorators/debounce';
import { Link } from 'umi';
import { Scrollbars, PageLoading } from '@/components';
import { getDefaultCollapsedSubMenus } from './SiderMenuUtils';
import styles from './index.less';

const BaseMenu = React.lazy(() => import('./BaseMenu'));
const { Sider } = Layout;

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: getDefaultCollapsedSubMenus(props),
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { pathname } = state;
    if (props.location.pathname !== pathname) {
      return {
        pathname: props.location.pathname,
        openKeys: getDefaultCollapsedSubMenus(props),
      };
    }
    return null;
  }

  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }

  isMainMenu = key => {
    const { menuData } = this.props;
    return menuData.some(item => {
      if (key) {
        return item.key === key || item.path === key;
      }
      return false;
    });
  };

  handleOpenChange = openKeys => {
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    });
  };

  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };

  render() {
    const { collapsed, onCollapse, theme, windowH } = this.props;
    const { openKeys } = this.state;
    const defaultProps = collapsed ? {} : { openKeys };

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
        width={200}
        theme={theme}
        className="ly-sider"
      >
        <div className="ly-sider-btn">
          <Icon type="menu" onClick={this.toggle} rotate={collapsed ? 0 : 90} />
        </div>
        {/* <div className="ly-sider-btn-right" onClick={this.toggle}>
          <Icon type="left" rotate={collapsed ? 180 : 0} />
        </div> */}
        <Scrollbars
          style={{
            height: windowH - 64 - 40,
          }}
        >
          <Suspense fallback={<PageLoading />}>
            <BaseMenu
              {...this.props}
              mode="inline"
              handleOpenChange={this.handleOpenChange}
              onOpenChange={this.handleOpenChange}
              {...defaultProps}
            />
          </Suspense>
        </Scrollbars>
      </Sider>
    );
  }
}
