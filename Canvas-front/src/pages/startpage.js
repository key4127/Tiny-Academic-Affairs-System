import Navbar from "../components/navbar";
import OuterContainer from "../components/outer_container";
import InnerContainer from "../components/inner_container";
import '../css/page.css';

function StartPage() {
  return (
    <div className="page">
      <Navbar name="start_page" />
      <OuterContainer>
        <InnerContainer>
        </InnerContainer>
      </OuterContainer>
    </div>
  )
}

export default StartPage;