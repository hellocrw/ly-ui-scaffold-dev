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
      {
        path: '/mylayout',
        name: '布局layout',
        icon: 'smile',
        component: './layout/MyLayout',
      },
      {
        path: 'mytable',
        name: '表格table',
        icon: 'smile',
        component: './table/MyTable',
      },
      {
        path: 'myform',
        name: "表单form",
        icon: 'smile',
        component: './form/MyForm',
      },
      {
        path: 'mymodal',
        name: '对话框modal',
        icon: 'smile',
        component: './modal/MyModal',
      },
      {
        path: 'mymoda2',
        name: '对话框2',
        icon: 'smile',
        component: './modal/MyModal',
      },
      {
        path: 'mytree',
        name: '树',
        icon: 'smile',
        component: './tree/MyTree',
      }
    ],
  },
];
