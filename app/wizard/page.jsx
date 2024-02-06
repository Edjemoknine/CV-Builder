"use client";
import Steps from "../components/Steps";
import StepForm from "../components/StepForm";

const Wizard = () => {
  const steps = [
    { number: 1, name: "Your Info" },
    { number: 2, name: "Education" },
    { number: 3, name: "Experience" },
    { number: 4, name: "Skills" },
    { number: 5, name: "Projects" },
    { number: 6, name: "Submit " },
  ];
  return (
    <div className=" bg-white rounded-md  max-w-6xl min-h-screen h-full mx-auto p-3">
      <div className="grid md:grid-cols-3 grid-cols-1 h-full ">
        <div className="p-6 bg-blue-950  rounded-md h-full">
          <Steps steps={steps} />
        </div>
        <div className="p-6 col-span-2">
          <StepForm />
        </div>
      </div>
    </div>
  );
};

export default Wizard;
