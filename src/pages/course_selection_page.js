import {Input, Select} from "antd";

import Navbar from "../components/navbar";
import OuterContainer from "../components/outer_container";
import InnerContainer from "../components/inner_container";

import "../css/course_select_page.css";
import React from "react";

const { Search } = Input;

function CourseSelectNavLeft() {
  return (
    <div className="course_select_navbar_left">
      <Select
        style={{ width: '92px' }}
        options={[{ value: 'all', label: <span>全部</span> },
          { value: '', label: <span>通识课</span> },
          { value: 'administrator', label: <span>公共选修课</span> }]} />
    </div>
  )
}

function CourseSelectNavRight() {
  return (
    <div className="course_select_navbar_right">
      <Search placeholder=""/>
    </div>
  )
}

function CourseSelectPage() {
  return (
    <div className="course-select-page">
      <Navbar name="course_select"/>
      <OuterContainer>
        <InnerContainer>
          <div className="course-select-navbar">
            <CourseSelectNavLeft />
            <CourseSelectNavRight />
          </div>
        </InnerContainer>
      </OuterContainer>
    </div>
  )
}

export default CourseSelectPage;