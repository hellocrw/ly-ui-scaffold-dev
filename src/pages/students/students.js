import React from 'react';
import styles from './students.css';
import axios from 'axios';
import { Table, Tag, Space } from 'antd';

class stduents extends React.Component{
  
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
      key: 'action',
      render: () => <a>删除</a>,
    },
  ];
  
  constructor(props){
    super(props);
    this.state = {
      students: [],
      url:'http://localhost:8080/query',
    }
    
  }
  // 获取后端数据
  getData() {
    axios.get(this.state.url)
    .then(res => {
      console.log(res.data),
      this.setState({  
        students: res.data
      })  
    })  
.catch(error => {
        console.log(error)
    });
  }

  // 生命周期钩子，componentDidMount 
  componentDidMount = () => {
    this.getData();
    console.log('componentDidMount',this.state.students);
  }

  render(){
    return (
      // <div></div>
      <div>
      <Table dataSource={this.state.students} columns={this.columns} />
      </div>
      
      
    )
  }
}

export default stduents;