import React, { Component } from 'react'
import styles from './MyTable.css'
import {Button, Table} from 'antd'

export default class MyTable extends Component {

  constructor(props){
    super(props)
    this.columns =[{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
    }
  ];
  this.state = {
    dataSource: [
      {
        key: '0',
        name: 'Edwrd king 0',
        age: '32',
        address: 'London',
      },
      {
        key: '1',
        name: 'Edwrd king 1',
        age: '32',
        address: 'London',
      },
      {
        key: '2',
        name: 'Edwrd king 2',
        age: '32',
        address: 'London',
      },
      {
        key: '3',
        name: 'Edwrd king 3',
        age: '32',
        address: 'London',
      },
    ]
  }
}

  handleAdd = () => {
    console.log("add");
  }

  render() {
    return (
      <div>
        <div style={
          {
            marginLeft: '20px'
          }
        }>
          <Button
            onClick= {this.handleAdd} type="primary" style={{
              marginBottom: 16
            }}
          >
            Add a row
          </Button>
          <Table
            bordered
            dataSource={this.state.dataSource}
            columns={this.columns}>
          </Table>
        </div>
    </div>
    )
  }
}
