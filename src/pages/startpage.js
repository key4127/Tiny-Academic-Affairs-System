import Navbar from "../components/navbar";
import '../css/page.css';
import OuterContainer from "../components/outer_container";
import InnerContainer from "../components/inner_container";

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