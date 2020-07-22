import React from 'react';
import { Form, Icon, Modal, Input, Button, Checkbox, Tabs, Row, Col } from 'antd';
import { connect } from 'umi';
import Footer from '@/layouts/Footer';
import logo from '@/assets/images/logo.png';
const { TabPane } = Tabs;
const FormItem = Form.Item;
import styles from './index.less';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAccountSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(['username', 'password'], { force: true }, (err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'login/fetchLogin',
          payload: {
            ...values,
          },
        });
      } else {
        Modal.error({
          title: '登录',
          content: '用户账号、密码不能为空！',
        });
      }
    });
  };

  onGetCaptcha = () => {
    let count = 59;
    this.setState({ count });
    this.interval = setInterval(() => {
      count -= 1;
      this.setState({ count });
      if (count === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  };

  render() {
    const { loading, setting } = this.props;
    const { type, count } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.loginPage}>
        <div className={styles.main}>
          <div className={styles.logo}>
            {/* <img src={logo} /> */}
            <img src={logo} alt="logo" width="32" />
            <span className={styles.logoName}>{setting.logoTitle}</span>
          </div>
          <Form onSubmit={this.handleAccountSubmit}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请输入账号！',
                  },
                ],
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon
                      type="user"
                      style={{
                        color: 'rgba(0,0,0,.25)',
                      }}
                    />
                  }
                  placeholder="账号"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ],
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon
                      type="lock"
                      style={{
                        color: 'rgba(0,0,0,.25)',
                      }}
                    />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </FormItem>
            {/* <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住登录</Checkbox>)}
              <a style={{ float: 'right' }}>忘记密码</a>
            </FormItem> */}
            <FormItem>
              <Button
                loading={loading.effects['login/fetchLogin'] || false}
                className={styles.submit}
                type="primary"
                size="large"
                htmlType="submit"
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
        <Footer className={styles.footer} />
      </div>
    );
  }
}

const Login = Form.create()(
  connect(({ login, setting, loading }) => {
    return { login, setting, loading };
  })(LoginPage)
);
export default Login;
