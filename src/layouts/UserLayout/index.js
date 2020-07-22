/*
 * @Description: 用户布局
 * @Author: admin
 * @Date: 2020-03-06 09:45:51
 * @LastEditors: admin
 * @LastEditTime: 2020-04-13 14:40:07
 */
import React, { Fragment } from 'react';
import { Link } from 'umi';
import { Icon } from 'antd';
import SelectLang from '@/components/SelectLang';
import Footer from '@/layouts/Footer';
import styles from './index.less';
import logo from '../../assets/images/logo.png';

class UserLayout extends React.PureComponent {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'Ly-ui-scaffold';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - Ly-ui-scaffold`;
  //   }
  //   return title;
  // }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        {/* <div className={styles.lang}>
          <SelectLang />
        </div> */}
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>管理系统</span>
              </Link>
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserLayout;
