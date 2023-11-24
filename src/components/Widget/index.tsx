import Header from "./Header";
import LandingPage from "./LandingPage";
import SectionWrapper from "../../hoc/SectionWrapper";

const index = () => {
  return (
    <div className="w-[25rem] bg-gray-200 fixed bottom-[10%] right-[3%] rounded-xl bg-opacity-25">
          <Header />
          <LandingPage/>
        <div>
        </div>
    </div>
  );
};

export default SectionWrapper(index, '');
