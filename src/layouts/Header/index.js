/*
 * @Description: 头部信息
 * @Author: admin
 * @Date: 2020-03-06 09:45:51
 * @LastEditors: admin
 * @LastEditTime: 2020-03-23 14:27:26
 */
import React, { PureComponent } from 'react';
import { Layout, message, Icon } from 'antd';
import Animate from 'rc-animate';
import { history, connect, Link } from 'umi';
import RightContent from './RightContent';
import styles from './index.less';

const { Header } = Layout;

class HeaderView extends PureComponent {
  //   handleNoticeClear = type => {
  //     message.success(
  //       `${formatMessage({ id: 'component.noticeIcon.cleared' })} ${formatMessage({
  //         id: `component.globalHeader.${type}`,
  //       })}`
  //     );
  //     const { dispatch } = this.props;
  //     dispatch({
  //       type: 'global/clearNotices',
  //       payload: type,
  //     });
  //   };

  //   handleNoticeVisibleChange = visible => {
  //     if (visible) {
  //       const { dispatch } = this.props;
  //       dispatch({
  //         type: 'global/fetchNotices',
  //       });
  //     }
  //   };

  // 用户下拉菜单
  onMenuClick = ({ key }) => {
    const { dispatch } = this.props;
    // if (key === 'userCenter') {
    //   history.push('/account/center');
    //   return;
    // }
    if (key === 'logout') {
      dispatch({
        type: 'login/fetchLoginOut',
      });
    }
  };

  render() {
    const { setting, logo, logoTitle } = this.props;

    return (
      <div className="ly-layout-header">
        <Header>
          <div className="ly-layout-header-left">
            <Link to="/" className="ly-logo" key="logo">
              <img src={logo} alt="logo" width="32" />
              <span className="ly-logo-name">{logoTitle}</span>
            </Link>
          </div>
          <RightContent onMenuClick={this.onMenuClick} {...this.props} />
        </Header>
      </div>
    );
  }
}

export default connect(({ login, global, setting, loading }) => ({
  currentUser: login.currentUser,
  collapsed: global.collapsed,
  fetchingNotices: loading.effects['global/fetchNotices'],
  setting,
}))(HeaderView);
