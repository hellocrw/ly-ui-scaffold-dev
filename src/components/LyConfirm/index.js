/*
 * @Description: 确认对话框
 * @Author: admin
 * @Date: 2020-04-13 15:24:45
 * @LastEditors: admin
 * @LastEditTime: 2020-04-13 15:35:40
 */
import { Modal } from 'antd';
const confirm = Modal.confirm;

//确认对话框
export default function LyConfirm(
  content = {},
  type = 'primary',
  onOk = Function.prototype,
  onCancel = Function.prototype,
  title = '提示'
) {
  let _type = type;
  let config = {};
  if (typeof content === 'string') {
    config.content = content;
    config.onOk = onOk;
    config.onCancel = onCancel;
    config.title = title;
  } else {
    config = {
      ...content,
    };
    _type = content.type || 'primary';
  }

  switch (_type) {
    case 'warn':
      //警告类型操作提示
      config.okType = 'danger';
      config.icon = 'info-circle';
      break;
    case 'danger':
      //危险类型操作提示
      config.okType = 'danger';
      config.icon = 'exclamation-circle';
      break;
    default:
      config.okType = 'primary'; //默认确认按钮类型
      config.icon = 'question-circle'; //问号
      break;
  }

  confirm({
    okText: '确定',
    cancelText: '取消',
    ...config,
  });
}
