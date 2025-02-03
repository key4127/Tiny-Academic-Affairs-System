import {Input, Select} from "antd";
import React from "react";

import "../css/course_select_page.css";

const { Search } = Input;

function CourseSelectNavLeft() {
  return (
    <div className="course-select-navbar-left">
      <Select
        style={{ width: '92px' }}
        options={[{ value: 'all', label: <span>全部</span> },
          { value: '', label: <span>通识课</span> },
          { value: 'administrator', label: <span>公共选修课</span> }]} />
      <Select
        style={{ width: '92px' }}
        options={[{ value: 'all', label: <span>开设学院</span> },
          { value: '', label: <span>电子信息与电气工程学院</span> },
          { value: 'administrator', label: <span>机械与动力学院</span> }]} />
    </div>
  )
}

function CourseSelectNavRight() {
  return (
    <div className="course-select-navbar-right">
      <Search placeholder=""/>
    </div>
  )
}

function CourseSelectNavbar() {
  return (
    <div className="course-select-navbar">
      <CourseSelectNavLeft />
      <CourseSelectNavRight />
    </div>
  )
}

export default CourseSelectNavbar;