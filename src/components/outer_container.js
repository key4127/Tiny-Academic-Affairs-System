import "../css/bodycontainer.css";

function OuterContainer(props) {
  return (
    <div className="outer-body-container">
      {props.children}
    </div>
  )
}

export default OuterContainer;