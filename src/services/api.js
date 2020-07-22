import { query, post, postForm } from '@/utils/AxiosUtil';

let base = '/gateway';

/* 看板 */
// 看板
export const reqDashboardGet = params => {
  return query(`${base}/dashboard`, params);
};
// 使用端口
export const reqEntrypointsGet = params => {
  return query(`${base}/entrypoints`, params);
};
// 概要信息
export const reqOverviewGet = params => {
  return query(`${base}/overview`, params);
};