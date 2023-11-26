import { useContext, useRef } from "react";
import MainWidget from "./Widget/MainWidget";
import { MyContext } from "../MyContext";

const ShadowWidget = () => {
  const { btn, setRef } = useContext(MyContext)!;
  const divRef = useRef<HTMLDivElement>(null);
  setRef(divRef);
  return (
    <>
      <div
        className={`opacity-0 bottom-[10%] w-[25rem] right-[3%] fixed ${btn ? "" : "mainWidget"} z-50`}
        ref={divRef}
      >
        <MainWidget />
      </div>
    </>
  );
};

export default ShadowWidget;
