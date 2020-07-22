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
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.xh)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  // 删除学生信息
  handleDelete = key => {
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
    const students = [...this.state.students];
    this.setState({
      students: students.filter(item => {
        console.log(item.xh);
        item.xh !== key;
      }),
    });
  };

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
      // url:'http://localhost:8080/query',
    }
    this.AddStu = this.AddStu.bind(this);
  }
  

  // 生命周期钩子，componentDidMount , render之后调用
  componentDidMount = () => {
    this.getData();
  }
  
  // 添加学生信息
  AddStu(){
    console.log('add student')
    // 弹出对话框 , 父类调用子类的方法---onRef={(ref)=>{ this.studentDetail = ref}}
    this.studentDetail.showModal()
  }

  // 修改学生信息
  updateStu(tags){
    console.log(" update student",tags)
  }
  

  render(){
    return (
      <div>
        <Button onClick={this.AddStu} type="primary" style={{ marginBottom: 16 }}>
          添加学生信息
        </Button>
        <Table dataSource={this.state.students} columns={this.columns} />
        <StudentDetail  onRef={(ref)=>{ this.studentDetail = ref}}/>
      </div>
    )
  }
}

export default Stduents;