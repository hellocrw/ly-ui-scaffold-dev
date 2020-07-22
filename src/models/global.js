import { getSize } from '@/utils/utils';

export default {
  namespace: 'global',
  state: {
    collapsed: false,
    windowH: getSize().windowH,
  },
  subscriptions: {
    // 监听屏幕改变，修改state
    resize({ dispatch }) {
      const getWindowSize = () => {
        const { windowH } = getSize();
        dispatch({
          type: 'changeWindowH',
          payload: windowH,
        });
      };
      window.addEventListener('resize', getWindowSize, false);
    },
  },
  effects: {},
  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    changeWindowH(state, { payload }) {
      return {
        ...state,
        windowH: payload,
      };
    },
  },
};
