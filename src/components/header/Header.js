import React, { Component } from 'react';
import { DatePicker, Button  } from "antd";
import './header.scss'
class Headers extends Component {
  render() {
    return (
      <div className='header'>
        <Button type="primary">Button</Button>
        <DatePicker />
      </div>
    );
  }
}

export default Headers;