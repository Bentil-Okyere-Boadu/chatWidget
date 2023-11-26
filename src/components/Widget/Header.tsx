import { Avatar } from "@chakra-ui/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Pages from "../../enums";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

type HeaderProps = {
  previousPage: () => void;
  emailPage: () => void;
  page: string;
};

const Header = ({ previousPage, page, emailPage }: HeaderProps) => {
  const { switchWidget } = useContext(MyContext)!;

  return (
    <div className="p-5 bg-gradient-to-r from-[#9D0001] w-full rounded-t-lg flex justify-between items-center">
      <div className="flex flex-row justify-start content-center gap-3 items-center">
        {page !== Pages.landingPage && (
          <button onClick={previousPage} className="text-white">
            <ChevronLeftIcon fontSize="large" />
          </button>
        )}
        <Avatar name="AIZee" />
        <p className="text-white font-bold text-lg">AIZee</p>
      </div>
      <div className="w-[30%] flex justify-end gap-5 items-center">
        {page === Pages.chatPage && (
          <button onClick={emailPage} className="text-white">
            <MailOutlineIcon fontSize="large" />
          </button>
        )}
        <button onClick={switchWidget} className="text-white">
          <KeyboardArrowDownIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Header;
