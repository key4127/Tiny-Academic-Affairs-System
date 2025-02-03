import "../css/title.css";

function Title(props) {
  return (
    <div className="title">
      <p>{props.text}</p>
    </div>
  )
}

export default Title;