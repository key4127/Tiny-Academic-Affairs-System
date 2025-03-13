import "../css/error.css";

function PermissionDenied(props) {
  return (
    <div className="PermissionDenied">
      <p>{props.text}</p>
    </div>
  )
}

export default PermissionDenied;