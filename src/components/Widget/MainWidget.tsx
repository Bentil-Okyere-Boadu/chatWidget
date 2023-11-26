import Header from "./Header";
import LandingPage from "./LandingPage";
import ChatPage from "./ChatPage";
import { useState } from "react";
import Pages from "../../enums";
import EmailPage from "./EmailPage";

const MainWidget = () => {
  const [page, setPage] = useState<string>(Pages.landingPage);

  const moveToChatPage = () => {
    setPage(Pages.chatPage);
  };
  const moveToLandingPage = () => {
    if (page === Pages.emailPage) {
      setPage(Pages.chatPage);
    } else {
      setPage(Pages.landingPage);
    }
  };
  const moveToEmailPage = () => {
    setPage(Pages.emailPage);
  };

  return (
    <div className="w-full bg-gray-200 rounded-xl bg-opacity-25">
      <Header
        previousPage={moveToLandingPage}
        page={page}
        emailPage={moveToEmailPage}
      />
      {page === Pages.landingPage && <LandingPage nextPage={moveToChatPage} />}
      {page === Pages.chatPage && <ChatPage />}
      {page === Pages.emailPage && <EmailPage />}
      <div></div>
    </div>
  );
};

export default MainWidget;
