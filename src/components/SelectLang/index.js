/*
 * @Description: 国际化按钮
 * @Author: admin
 * @Date: 2020-03-06 09:45:51
 * @LastEditors: admin
 * @LastEditTime: 2020-03-13 17:40:41
 */
import React, { PureComponent } from 'react';
// import { getLocale, setLocale, formatMessage } from 'umi';
import { Menu, Icon } from 'antd';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export default class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    setLocale(key);
  };

  render() {
    const { className } = this.props;
    const selectedLang = getLocale();
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={this.changeLang}>
        <Menu.Item key="zh-CN">
          <span role="img" aria-label="简体中文">
            🇨🇳
          </span>{' '}
          简体中文
        </Menu.Item>
        <Menu.Item key="en-US">
          <span role="img" aria-label="English">
            🇬🇧
          </span>{' '}
          English
        </Menu.Item>
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <Icon type="global" title={formatMessage({ id: 'navBar.lang' })} />
        </span>
      </HeaderDropdown>
    );
  }
}
