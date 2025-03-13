import "../css/bodycontainer.css";

function InnerContainer(props) {
  return (
    <div className="inner-body-container" style={{ width: `${props.width}px` }}>
      {props.children}
    </div>
  )
}

export default InnerContainer;