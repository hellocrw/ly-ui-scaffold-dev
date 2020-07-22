import { query, post, postForm } from '@/utils/AxiosUtil';

let base = '';

// 登录
export const reqPostLogin = params => {
  return postForm(`login`, params);
};
// 退出
export const reqPostLogout = params => {
  return query(`logout`, params);
};
