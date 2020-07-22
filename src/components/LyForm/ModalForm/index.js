/*
 * @Description: 模态框表单
 * @Author: admin
 * @Date: 2020-03-17 16:50:09
 * @LastEditors: admin
 * @LastEditTime: 2020-03-17 17:15:49
 */
import React from 'react';
import { DragModal } from '@/components';
import PropTypes from 'prop-types';
import BaseForm, { onSubmit } from '../BaseForm';

class ModalForm extends React.Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    visible: PropTypes.bool,
    formProps: PropTypes.bool,
  };

  static defaultProps = {
    width: 640,
    visible: false,
    formProps: {}, // 表单配置
  };

  // 渲染表单
  renderForm = () => {
    const { formProps = {} } = this.props;
    return (
      <BaseForm
        {...formProps}
        ref={node => {
          this.baseFormRef = node;
        }}
      />
    );
  };

  // 保存
  onOk = () => {
    const { onOk, formProps } = this.props;
    if (onOk) {
      onSubmit(this.baseFormRef.getForm(), formProps.initialValues || {}, onOk);
    }
  };

  render() {
    const { children, title, width, visible, onOk, formProps, ...restProps } = this.props;

    return visible ? (
      <DragModal
        title={title}
        width={width}
        visible={visible}
        onOk={this.onOk}
        destroyOnClose
        {...restProps}
      >
        {children || this.renderForm()}
      </DragModal>
    ) : null;
  }
}

export default ModalForm;
