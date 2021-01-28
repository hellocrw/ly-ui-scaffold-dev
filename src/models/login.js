import { Modal, message } from 'antd';
import { reqPostLogin, reqPostLogout } from '@/services/login';
import { history } from 'umi';
import {
  getTokenCache,
  setTokenCache,
  getUserCache,
  setUserCache,
  getAuthCache,
  setAuthCache,
  removeCache,
} from '@/utils/user';

const initState = {
  token: getTokenCache() || '',
  currentUser: getUserCache() || {},
  authorization: getAuthCache() || {},
};

export default {
  namespace: 'login',
  state: {
    ...initState,
  },
  subscriptions: {
    setupHistory({ history }) {
      // 监听 history 变化，没登录就跳到/login
      return history.listen(({ pathname, search }) => {
        const token = getTokenCache();
        if (!token) {
          history.replace('/login');
        }
      });
    },
  },
  effects: {
    *fetchLogin({ payload: formData }, { put, call, select }) {
      // 发起登录请求
      const res = yield call(reqPostLogin, formData);
      const { meta, data } = res;
      if (meta.success) {
        yield put({
          type: 'setData',
          payload: { currentUser: data, token: data.tokenId, authorization: data.authorization },
        });
        setUserCache(data);
        setAuthCache(data.authorization || {});
        setTokenCache(data.tokenId);
        // 跳转首页
        history.push('/index');
      } else {
        history.push('/index');
        Modal.error({
          title: '登录失败',
          content: meta.message,
        });
        yield put({
          type: 'clearData',
        });
      }
    },
    *fetchLoginOut({}, { put, call, select }) {
      const res = yield call(reqPostLogout, {});
      const { meta, data } = res;
      if (meta.success) {
        // 清除缓存
        removeCache();
        yield put({
          type: 'clearData',
        });
        // 跳转登录页
        history.push('/login');
      } else {
        message.error(meta.message);
      }
    },
  },
  reducers: {
    setData(state, { payload }) {
      return { ...state, ...payload };
    },
    clearData(state, {}) {
      return { currentUser: {} };
    },
  },
};
