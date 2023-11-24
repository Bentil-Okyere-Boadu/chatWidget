import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

type FeatureProps = {
  text: String;
  icon: any;
  index: number;
};

const Feature = ({ text, icon, index }: FeatureProps) => {
  return (
    <div className="w-[45%]">
      <motion.div
        variants={fadeIn("top", "tween", 0.5 * index, 0.75)}
        whileHover={{scale: 1.05}}
        className="flex justify-center items-center rounded-md flex-col shadow-md bg-white p-4 h-34 text-center"
      >
        <div className="h-[50%]">{icon}</div>
        <h3 className="h-[50%]">{text}</h3>
      </motion.div>
    </div>
  );
};

export default Feature;
