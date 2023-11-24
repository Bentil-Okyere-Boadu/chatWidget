import { Heading } from "@chakra-ui/react";
import data from "../../data";
import Feature from "./Feature";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
type LandingPageProps = {
  nextPage: () => void;
};

const LandingPage = ({ nextPage }: LandingPageProps) => {
  return (
    <>
      <div className="flex justify-between flex-nowrap p-3 flex-col w-[100%] rounded-[0]-md">
        <div className="text-center p-2">
          <motion.div variants={textVariant(0.4)}>
            <h3>DISCOVER</h3>
            <Heading className="text-xl mb-6">
              Your key to the digital future
            </Heading>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center gap-4 mb-5">
          {data.features.map((feature, index) => {
            return (
              <Feature
                text={feature.text}
                icon={
                  <feature.icon fontSize="large" sx={{ color: "#9D0001" }} />
                }
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex justify-center content-center w-full my-5">
          <button
            className="bg-[#9D0001] p-4 rounded-md text-white font-bold"
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
