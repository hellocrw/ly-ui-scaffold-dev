import React from 'react';
import styles from './student-detail.css';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { string } from 'prop-types';
import { values, join } from 'lodash';

class StudentDetail extends React.Component{

  url = 'http://localhost:8080';

  constructor(props){
    super(props)
    this.state = {
      visible: false,
      xh:'',
      xm:'',
      xb:'',
      nl:'',
      zy:'',
      bysj:'',
      byxx:'',
      type: 'add',
    }
  }

  // 绑定学生数据
  setStu(data){
    this.setState({
      xh: data.xh,
      xm: data.xm,
      xb: data.xb,
      nl: data.nl,
      zy: data.zy,
      bysj: data.bysj,
      byxx: data.byxx,
    })
  }
  // onRef获取父组件
  componentDidMount() {
    this.props.onRef(this)
 }

 // 修改类型
 updateType(type) {
  this.setState({
    type: type,
  })
 }

  // 显示对话框
  showModal = () => {
    this.setState({
      visible: true
    })
  }

  // 提交表单数据
  handleOk = e => {
    var params = new URLSearchParams()
    params.set("xh", this.state.xh)
    params.set("xm",this.state.xm)
    params.set("xb",this.state.xb)
    params.set("nl",this.state.nl)
    params.set("zy",this.state.zy)
    params.set("bysj",this.state.bysj)  
    params.set("byxx",this.state.byxx) 
    let opts = {
      credentials: 'include',  
      method: "POST",  
      headers: {
        "Accept": "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded"
      },  
      body: params
    }
    // 提交数据
    if(this.state.type == 'add'){
      fetch(this.url + '/create', opts).then(response => console.log(response));
    }else if(this.state.type == 'update'){
      fetch(this.url + '/update', opts).then(response => console.log(response));
    }
    // 将表单数据传给students父组件
    this.props.students.flushData(this.state, this.state.type);
    // 关闭对话框
    this.setState({
      visible: false
    })
  }

  // 关闭对话框
  handleCancel = e =>{
    this.setState({
      visible: false
    })
  }
  
  // 数据绑定
  changeXH(event){
    this.setState({
      xh: event.target.value,
    })
  }
  changeXM(event){
    this.setState({
      xm: event.target.value,
    })
  }
  changeXB(event){
    this.setState({
      xb: event.target.value,
    })
  }
  changeNL(event){
    this.setState({
      nl: event.target.value,
    })
  }
  changeZY(event){
    this.setState({
      zy: event.target.value,
    })
  }
  changeBYSJ(event){
    this.setState({
      bysj: event.target.value,
    })
  }
  changeBYXX(event){
    this.setState({
      byxx: event.target.value,
    })
  }
  

  render(){
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      <div>
        <Modal title="新增学生信息"
        visible = {this.state.visible}
        onOk = {this.handleOk}
        onCancel = {this.handleCancel}>
          <Form {...layout}  name="basic">
            {this.state.type == 'add' ? (
              <Form.Item label="学号" name="xh" rules={[{ required: true}]}>
              <Input value={this.state.xh} onChange={this.changeXH.bind(this)} />
            </Form.Item>
            ) : null}
            <Form.Item label="姓名" name="xm" rules={[{ required: true}]} >
              <Input type="text" value={this.state.xm} onChange={this.changeXM.bind(this)}/>
            </Form.Item>
            <Form.Item label="性别" name="xb"  rules={[{ required: true }]} >
              <Input value={this.state.xb} onChange={this.changeXB.bind(this)}/>
            </Form.Item>
            <Form.Item label="年龄" name="nl"  rules={[{ required: true }]} >
              <Input value={this.state.nl} onChange={this.changeNL.bind(this)}/>
            </Form.Item>
            <Form.Item label="专业" name="zy"  rules={[{ required: true }]} >
              <Input value={this.state.zy} onChange={this.changeZY.bind(this)}/>
            </Form.Item>
            <Form.Item label="毕业时间" name="bysj"   rules={[{ required: true }]}>
              <Input value={this.state.bysj}  onChange={this.changeBYSJ.bind(this)}/>
            </Form.Item>
            <Form.Item label="毕业学校" name="byxx"  rules={[{ required: true }]} >
              <Input value={this.state.byxx} onChange={this.changeBYXX.bind(this)}/>
            </Form.Item>
          </Form>
      </Modal>
      </div>
    )
  }
}

export default StudentDetail;