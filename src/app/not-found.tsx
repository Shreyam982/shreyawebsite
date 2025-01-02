import { Drill, Hammer, Wrench } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-row justify-between w-48 mb-8">
        <Wrench size={50} />
        <Hammer size={50} />
        <Drill size={50} />
      </div>
      <h2>Page Under Construction :)</h2>
    </div>
  );
};

export default NotFound;
