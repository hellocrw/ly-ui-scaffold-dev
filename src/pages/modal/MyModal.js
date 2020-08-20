import React, { Component } from 'react'
import { Modal, Button } from 'antd';

export default class MyModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      visiable: false,
    }
  }

  showModal = () => {
    this.setState({
      visiable: true,
    })
  }

  handleOk = () => {
    this.setState({
      visiable: false,
    })
  }

  handleCancel = () => {
    this.setState({
      visiable: false,
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.showModal} type="primary" style={{
          margin: "20px"
        }}>modal</Button>
        <Modal
          title="对话框"
          visible = {this.state.visiable}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{
            minHeight: "800px"
          }}
        >
            <p> modal </p>
        </Modal>
      </div>
    )
  }
}
