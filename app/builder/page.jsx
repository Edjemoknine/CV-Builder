"use client";

import { useSelector } from "react-redux";

const Builder = () => {
  const { data } = useSelector((store) => store);
  return (
    <div className=" bg-white rounded-md  max-w-6xl min-h-screen h-full mx-auto p-3">
      <div className="grid md:grid-cols-3 grid-cols-1 h-full ">
        <div className="p-6 bg-blue-950 min-h-screen  rounded-md h-full">
          Left
        </div>
        <div className="p-6 col-span-2">Right</div>
      </div>
    </div>
  );
};

export default Builder;
