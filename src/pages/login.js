import React from "react";
import Navbar from "../components/navbar";
import { Select, Input, Button } from "antd";
import '../css/login.css';

function InputName() {
  return (
    <div className="login-input-name">
      <p>用户类型</p>
      <p>用户名</p>
      <p>密码</p>
    </div>
  )
}

function InputBar() {
  return (
    <div className="login-input-bar">
      <Select
        style={{ width: '192px' }}
        options={[{ value: 'student', label: <span>学生</span> },
                        { value: 'professor', label: <span>教师</span> },
                        { value: 'administrator', label: <span>管理员</span> }]} />
      <Input placeholder="" />
      <Input.Password placeholder=""/>
    </div>
  )
}

function Login() {
  return (
    <div className="login">
      <Navbar name="login" />
      <div className="login-container">
        <div className="login-input-container">
          <InputName />
          <InputBar />
        </div>
        <Button className="login-button">登录</Button>
      </div>
    </div>
  )
}

export default Login;