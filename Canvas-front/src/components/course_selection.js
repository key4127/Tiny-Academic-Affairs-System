import { Button, Divider } from "antd";

import "../css/course_select_page.css";

function CourseSelectionInfo(props) {
  return (
    <div className="course-select-info">
      <div className="course-select-basic-info">
        <p className="course-select-text">{props.number}</p>
        <p className="course-select-text">{props.name}</p>
      </div>
        <p className="course-select-text">{props.time}</p>
    </div>
  )
}

function CourseSelectionButton() {
  return (
    <div className="course-select-button">
      <Button>选课</Button>
    </div>
  )
}

function CourseSelectionPart(props) {
  return (
    <div>
      <div className="course-select-part">
        <CourseSelectionInfo number={props.number} name={props.name} time={props.time}/>
        <CourseSelectionButton />
      </div>
      <Divider />
    </div>
  )
}

function CourseSelection() {
  return (
    <div className="course-select">
      <CourseSelectionPart number="number 1" name="course 1" time="time 1"/>
      <CourseSelectionPart number="number 2" name="course 2" time="time 2"/>
      <CourseSelectionPart number="number 3" name="course 3" time="time 3"/>
      <CourseSelectionPart number="number 1" name="course 1" time="time 1"/>
      <CourseSelectionPart number="number 2" name="course 2" time="time 2"/>
      <CourseSelectionPart number="number 3" name="course 3" time="time 3"/>
    </div>
  )
}

export default CourseSelection;