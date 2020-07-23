import React from 'react';
import styles from './students.css';
import axios from 'axios';
import "whatwg-fetch";
import { Table, Tag, Space, Button, Popconfirm } from 'antd';
import StudentDetail from "./students-detail/student-detail";

class Stduents extends React.Component{
  
  url = 'http://localhost:8080';

  columns = [
    {
      title: '学号',
      dataIndex: 'xh',
    },
    {
      title: '姓名',
      dataIndex: 'xm',
    },
    {
      title: '性别',
      dataIndex: 'xb',
    },
    {
      title: '年龄',
      dataIndex: 'nl',
    },
    {
      title: '专业',
      dataIndex: 'zy',
    },
    {
      title: '毕业时间',
      dataIndex: 'bysj',
    },
    {
      title: '毕业学校',
      dataIndex: 'byxx',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) =>
        this.state.students.length >= 1 ? (
          <span>
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.xh)}>
              <a>删除</a>
            </Popconfirm>
            &nbsp;&nbsp;
            <Popconfirm title="Sure to update?" onConfirm={() => this.updateStu(record)}>
              <a>修改</a>
            </Popconfirm>
          </span>
        ) : null,
    },
  ];

  // 删除学生信息
  handleDelete = key => {
    console.log('delete stu:', key);
    // 访问后端删除信息
    fetch(this.url + `/delete/${key}`, {
      method: "GET",
      mode: "cors",
      headers:{
                  'Accept':'application/json,text/plain,*/*'
              }
    }).then(response => {
      response.json()
    }).then(res => {
      console.log(res)
    }).catch(function (e) {
      console.log("fetch fail");
  });
    this.delete(key);
  };

  delete(key){
    console.log('delete............');
    const students = [...this.state.students];
    this.setState({
      students: students.filter(item => item.xh !== key),
    });
  }

  // 修改学生信息
  updateStu = key => {
    const type = 'update';
    // 将操作类型传给student-detail
    this.refs.studentDetail.updateType(type);
    this.refs.studentDetail.setStu(key);
    console.log(this.state.students);
    this.showModal('update');
  }

  // 获取后端学生数据
  getData() {
    fetch(this.url + `/query`, {
      method: "GET",
      mode: "cors",
      headers:{
                  'Accept':'application/json,text/plain,*/*'
              }
    }).then(response => response.json().then((data) => {
      console.log(data);
      this.setState({
        students: data,
      })
    }))
  }
  
  constructor(props){
    super(props);
    this.state = {
      students: [],
      type: '',
    }
    this.showModal = this.showModal.bind(this);
  }
  

  // 生命周期钩子，componentDidMount , render之后调用
  componentDidMount = () => {
    this.getData();
  }
  
  // 显示对话框
  showModal(){
    // 弹出对话框 , 父类调用子类的方法---onRef={(ref)=>{ this.studentDetail = ref}}
    this.studentDetail.showModal();
  }

  // 将数据添加到students上
  flushData = (data, type) => {
    if (type == 'add') {
      const students = [...this.state.students];
      console.log('add----------------');
      students.unshift(data);
      this.setState({
        students: students
      });
    }else if (type == 'update') {
      const students = [...this.state.students];
      const res = students.filter(item => item.xh !== data.xh);
      res.push(data);
      this.setState({
        students: res,
      })
      console.log(res);
    }
    
  }

  // 添加学生信息
  add = () => {
    this.refs.studentDetail.updateType('add');
    this.showModal()
  }
  
  render(){
    return (
      <div>
        <Button onClick={this.add} type="primary" style={{ marginBottom: 16 }}>
          添加学生信息
        </Button>
        <Table dataSource={this.state.students} columns={this.columns} />
        <StudentDetail students={this}  onRef={(ref)=>{ this.studentDetail = ref}} ref="studentDetail"/>
      </div>
    )
  }
}

export default Stduents;