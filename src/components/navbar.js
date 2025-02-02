import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import '../css/sidebar.css';
import {useNavigate} from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  return (
    <div className="basic-nav-bar">
      <div className="nav-left-button">
        <Button shape="default" variant="filled" color="#5390F9"
                onClick={() => navigate('/')}>
          <p className="text-button">首页</p>
        </Button>
        {
          props.name !== "course_list" &&
          <Button shape="default" variant="filled" color="#5390F9"
                  onClick={() => navigate('/course_list')}>
            <p className="text-button">课程列表</p>
          </Button>
        }
        {
          props.name !== "course_select" &&
          <Button shape="default" variant="filled" color="#5390F9"
                  onClick={() => navigate('/course_selection')}>
            <p className="text-button">选课</p>
          </Button>
        }
      </div>
      <div className="nav-right-button">
        {
          props.name !== "login" &&
          <Button shape="circle"
                  icon={<UserOutlined style={{color: '#5390F9'}}/>}
                  onClick={() => navigate('/login')}/>
        }
      </div>
    </div>
  )
}

export default Navbar;