"use client";
import Personal from "./Forms/PersonalInfo";
import Education from "./Forms/Education";
import Experience from "./Forms/Experience";
import Skills from "./Forms/Skills";
import ProjectForm from "./Forms/ProjectForm";
import Submit from "./Forms/Submit";
import { useSelector } from "react-redux";

const StepForm = () => {
  const { currentStep } = useSelector((store) => store);
  const step = currentStep;
  const renderForm = () => {
    if (step == 1) return <Personal />;
    if (step == 2) return <Education />;
    if (step == 3) return <Experience />;
    if (step == 4) return <Skills />;
    if (step == 5) return <ProjectForm />;
    if (step == 6) return <Submit />;
  };
  return <div className="w-full">{renderForm()}</div>;
};

export default StepForm;
