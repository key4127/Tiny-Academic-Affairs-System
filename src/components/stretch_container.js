import "../css/bodycontainer.css";

function StretchContainer(props) {
  return (
    <div className="stretch-body-container">
      {props.children}
    </div>
  )
}

export default StretchContainer;