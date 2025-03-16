import Navbar from "../components/navbar";
import OuterContainer from "../components/outer_container";
import InnerContainer from "../components/inner_container";
import '../css/page.css';
import '../css/start_page.css';
import Title from "../components/title";
import {Button, Divider} from "antd";

function ColumnStartContainer(props) {
  return (
    <div className="column-start-container">
      {props.children}
    </div>
  )
}

function RowStartContainer(props) {
  return (
    <div className="row-start-container">
      {props.children}
    </div>
  )
}

function BasicStartContainer(props) {
  return (
    <div className="basic-start-container">
      <InnerContainer>
        <Title text={props.title}></Title>
        <Divider style={{margin: 0, width: '95%', minWidth: '95%', alignSelf: 'center' }}/>
        <StartContentContainer>
          {props.children}
          <Button type="text" style={{ alignSelf: 'end', margin: '8px' }}>
            >>更多
          </Button>
        </StartContentContainer>
      </InnerContainer>
    </div>
  )
}

function StartContentContainer(props) {
  return (
    <div className="start-content-container">
      {props.children}
    </div>
  )
}

function StartPage() {
  return (
    <div className="page">
      <Navbar name="start_page" />
      <OuterContainer>
        <ColumnStartContainer>
          <RowStartContainer>
            <BasicStartContainer title={"通知"}>
            </BasicStartContainer>
            <BasicStartContainer title={"评分"}>
            </BasicStartContainer>
            <BasicStartContainer title={"日程"}>
            </BasicStartContainer>
          </RowStartContainer>
          <RowStartContainer>
            <BasicStartContainer title={"课程表"}>
            </BasicStartContainer>
            <BasicStartContainer title={"待办事项"}>
            </BasicStartContainer>
          </RowStartContainer>
        </ColumnStartContainer>
      </OuterContainer>
    </div>
  )
}

export default StartPage;