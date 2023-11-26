
type FeatureProps = {
  text: String;
  icon: any;
};

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <div className="w-full feature">
      <div
        className="flex justify-center items-center rounded-md flex-row shadow-md bg-white p-4 text-start"
      >
        <div className="w-[20%] items-center justify-center flex">{icon}</div>
        <h3 className="w-[80%]">{text}</h3>
      </div>
    </div>
  );
};

export default Feature;
