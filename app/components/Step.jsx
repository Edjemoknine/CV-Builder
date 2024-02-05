"use client";

import { useSelector } from "react-redux";

const Step = ({ step }) => {
  const { currentStep } = useSelector((store) => store);

  return (
    <div className="flex flex-col text-gray-500 md:flex-row gap-4 items-end text-center">
      <div
        className={`${step.number === currentStep && "bg-blue-500"} ${
          step.number < currentStep && "bg-green-500"
        } w-10 h-10 rounded-full border border-gray-400 flex justify-center text-white items-center`}
      >
        {step.number}
      </div>
      <div
        className={`${step.number === currentStep && "text-white"} ${
          step.number < currentStep && "text-green-500"
        } `}
      >
        <p>Step {step.number}</p>
        <h3 className={` text-sm md:text-xl `}>{step.name}</h3>
      </div>
    </div>
  );
};

export default Step;
