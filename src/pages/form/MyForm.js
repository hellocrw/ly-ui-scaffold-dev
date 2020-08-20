import React, { Component } from 'react'
import {Form, Input, Button, Checkbox, Radio, Select, TreeSelect, Cascader, DatePicker, InputNumber, Switch} from 'antd'

const layout = {
  labelCol: { 
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
}
export default class MyForm extends Component {
  render() {
    return (
      <div>
        <h1>MyForm</h1>
        <Form
          {...layout}
          name="basic"
        >
          <Form.Item
            label="username"
            name="username"
            rules={[
              {required: true, message: 'please input username'}
            ]}>
            <Input/>
          </Form.Item>
          <Form.Item
            label="dd.password"
            name="dd.password"
            rules={[
              {
                required: true,
                message: "please input password",
              },
            ]}>
              <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
            type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Form labelCol={{span: 4}} wrapperCol={{span: 4}} layout="horizontal"
          >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button>Small</Radio.Button>
              <Radio.Button>Default</Radio.Button>
              <Radio.Button>Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  }
                ]
              }
            ]}>

            </TreeSelect>
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    }
                  ]
                }
              ]}>
            </Cascader>
          </Form.Item>
          <Form.Item label="DatePicker">
              <DatePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch">
            <Switch></Switch>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
