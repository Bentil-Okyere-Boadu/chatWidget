import Header from "./Header";
import LandingPage from "./LandingPage";
import SectionWrapper from "../../hoc/SectionWrapper";
import ChatPage from "./ChatPage";
import { useState } from "react";
import Pages from "../../enums";


const MainWidget = () => {

  const [page, setPage] = useState<string>(Pages.landingPage);

  const moveToChatPage = () => {
    setPage(Pages.chatPage)
  }
  const moveToLandingPage = () => {
    setPage(Pages.landingPage)
  }
  
  return (
    <div className="w-[25rem] bg-gray-200 fixed bottom-[10%] right-[3%] rounded-xl bg-opacity-25">
          <Header previousPage={moveToLandingPage} page={page}/>
         { page === Pages.landingPage && <LandingPage nextPage={moveToChatPage}/>}
         { page === Pages.chatPage && <ChatPage />}
        <div>
        </div>
    </div>
  );
};

export default SectionWrapper(MainWidget, 'widget');
