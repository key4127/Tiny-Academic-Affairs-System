import "../css/bodycontainer.css";

function InnerContainer(props) {
  return (
    <div className="inner-body-container">
      {props.children}
    </div>
  )
}

export default InnerContainer;