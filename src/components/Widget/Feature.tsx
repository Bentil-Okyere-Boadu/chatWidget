import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

type FeatureProps = {
  text: String;
  icon: any;
  index: number;
};

const Feature = ({ text, icon, index }: FeatureProps) => {
  return (
    <div className="w-full">
      <motion.div
        variants={fadeIn("top", "tween", 0.5 * index, 0.75)}
        whileHover={{scale: 1.05}}
        className="flex justify-center items-center rounded-md flex-row shadow-md bg-white p-4 text-start"
      >
        <div className="w-[20%] items-center justify-center flex">{icon}</div>
        <h3 className="w-[80%]">{text}</h3>
      </motion.div>
    </div>
  );
};

export default Feature;
