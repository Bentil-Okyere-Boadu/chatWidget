import { Avatar } from "@chakra-ui/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pages from "../../enums";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

type HeaderProps = {
  previousPage: () => void;
  page: string;
};

const Header = ({ previousPage, page }: HeaderProps) => {
  const { switchWidget } = useContext(MyContext)!;

  return (
    <div className="p-5 bg-gradient-to-r from-[#9D0001] w-full rounded-t-lg flex justify-between items-center">
      <div className="flex flex-row justify-start content-center gap-3 items-center">
        {page === Pages.chatPage && (
          <button onClick={previousPage} className="text-white">
            <ChevronLeftIcon fontSize="large" />
          </button>
        )}
        <Avatar name="AIZee"/>
        <p className="text-white font-bold text-lg">AIZee</p>
      </div>
      <button onClick={switchWidget} className="text-white">
        <KeyboardArrowDownIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Header;
