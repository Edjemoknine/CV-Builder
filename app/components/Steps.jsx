import React from "react";
import Step from "./Step";

const Steps = ({ steps }) => {
  return (
    <div className="grid md:grid-cols-1 grid-cols-6 md:h-screen flex-row gap-3 justify-between items-center">
      {steps.map((step) => (
        <Step key={step.number} step={step} />
      ))}
    </div>
  );
};

export default Steps;
