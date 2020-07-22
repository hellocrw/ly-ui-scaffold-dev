/*
 * @Description: 路由配置
 * @Author: admin
 * @Date: 2020-03-06 09:45:51
 * @LastEditors: admin
 * @LastEditTime: 2020-03-13 18:19:28
 */
export default [
  {
    path: '/login',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/login',
        name: '登录',
        component: './login',
      },
    ],
  },
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/index',
      },
      {
        path: '/index',
        name: '欢迎',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/students',
        name: '学生信息',
        icon: 'smile',
        component: './students/students',
      },
    ],
  },
];
