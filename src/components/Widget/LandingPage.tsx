import { Heading } from "@chakra-ui/react";
import data from "../../data";
import Feature from "./Feature";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
type LandingPageProps = {
  nextPage: () => void;
};

const LandingPage = ({ nextPage }: LandingPageProps) => {

  const { btn } = useContext(MyContext)!;
  return (
    <>
      <div className="flex justify-between flex-nowrap p-3 flex-col w-[100%] rounded-[0]-md">
        <div className="text-center p-2">
          <div className={`opacity-0 ${btn ? "" : "landingPageHeader"}`}>
            <h3>DISCOVER</h3>
            <Heading className="text-xl mb-6">
              Your key to the digital future
            </Heading>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 mb-5" id="features">
          {data.features.map((feature, index) => {
            return (
              <Feature
                text={feature.text}
                icon={
                  <feature.icon fontSize="large" sx={{ color: "#9D0001" }} />
                }
                key={index}
              />
            );
          })}
        </div>
        <div className="flex justify-center content-center w-full my-5">
          <button
            className="bg-[#9D0001] p-4 rounded-md text-white font-bold aiChat"
            onClick={nextPage}
          >
            Chat with AI
            <DoubleArrowIcon className="ml-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
