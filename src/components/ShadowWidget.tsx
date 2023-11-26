import { useContext } from "react";
import MainWidget from "./Widget/MainWidget";
import { MyContext } from "../MyContext";

const ShadowWidget = () => {
  const { btn } = useContext(MyContext)!;
  return (
    <>
      <div
        className={`opacity-0 bottom-48 ${btn ? "" : "mainWidget"} z-50`}
      >
        <MainWidget />
      </div>
    </>
  );
};

export default ShadowWidget;
