import { Chat } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { useContext } from "react";
import { MyContext } from "../../MyContext";


const Index = () => {
  const { switchWidget, btn } = useContext(MyContext)!;
  
  return (
    <div style={{ bottom: "3%", right: "3%", position: "fixed", zIndex: "10" }}>
      <button
        className="rounded-full p-2 bg-[#9D0001] text-white font-semibold text-lg"
        onClick={switchWidget}
        hidden={btn}
      >
        <Close fontSize="large" />
      </button>
      <button
        className="rounded-full p-2 bg-white text-[#9D0001] font-semibold text-lg mx-2 border-[#9D0001] border-2"
        onClick={switchWidget}
        hidden={!btn}
      >
        <Chat fontSize="large" />
      </button>
    </div>
  );
};

export default Index;
