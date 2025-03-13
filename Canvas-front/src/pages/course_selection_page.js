import React from "react";

import Navbar from "../components/navbar";
import OuterContainer from "../components/outer_container";
import InnerContainer from "../components/inner_container";
import StretchContainer from "../components/stretch_container";
import Title from "../components/title";
import CourseSelectNavbar from "../components/course_navbar";
import CourseSelection from "../components/course_selection";
import PermissionDenied from "../components/permission denied";

import "../css/course_select_page.css";

function CourseSelectPage() {
  const isSelectTime = true;
  const isStudent = true;
  return (
    <div className="course-select-page">
      <Navbar name="course_select"/>
      <OuterContainer>
        <InnerContainer width={1080}>
          <div className="course-select-bar">
            <Title text="学生选课" />
            <CourseSelectNavbar/>
          </div>
        </InnerContainer>
        <StretchContainer>
          {
            isStudent && isSelectTime &&
            <CourseSelection/>
          }
          {
            !isStudent &&
            <PermissionDenied text="请以学生身份登录！" />
          }
          {
            !isSelectTime &&
            <PermissionDenied text="当前非选课时间！" />
          }
        </StretchContainer>
      </OuterContainer>
    </div>
  )
}

export default CourseSelectPage;