"use client";

import { WithContext as ReactTags } from "react-tag-input";
import { addNewInf, nextStep, prevStep } from "../../context/FormsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Skills = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  const { Skills, Competencies } = data;
  // ____________________________________

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const [skills, setSkills] = useState(Skills ? [...Skills] : []);

  const handleDelete = (i) => {
    setSkills(skills.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setSkills([...skills, tag]);
  };

  const [competence, setCompetence] = useState(
    Competencies ? [...Competencies] : []
  );

  const handleDeleteCompet = (i) => {
    setCompetence(competence.filter((tag, index) => index !== i));
  };

  const handleAdditionCompet = (tag) => {
    setCompetence([...competence, tag]);
  };

  const [Err, setErr] = useState("");

  const onSubmitForm = () => {
    if (skills.length > 0 && competence.length > 0) {
      // console.log({ skills, competence });
      dispatch(addNewInf({ Skills: skills, Competencies: competence }));
      dispatch(nextStep());
    } else {
      setErr("add at least one skills and one competence");
    }
    setTimeout(() => {
      setErr("");
    }, 2000);
  };

  return (
    <>
      <h1 className="tex text-5xl font-bold">Skills</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>
      {Err && <p className="my-4 text-red-500">{Err}</p>}
      <p className="">Your Skills :</p>
      <ReactTags
        tags={skills}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="bottom"
        placeholder={"Add Skill Press Enter"}
        autocomplete
        classNames={{
          tags: "tagsClass",
          tagInput: "tagInputClass",
          tagInputField: "tagInputFieldClass",
          selected: "selectedClass",
          tag: "tagClass",
          remove: "removeClass",
        }}
      />
      <p className="mt-4">
        Your Competencies :{" "}
        <span className="text-gray-400">(ex: Troubleshooting)</span>
      </p>
      <ReactTags
        tags={competence}
        placeholder={"Add Competencies Press Enter"}
        delimiters={delimiters}
        handleDelete={handleDeleteCompet}
        handleAddition={handleAdditionCompet}
        inputFieldPosition="bottom"
        autocomplete
        classNames={{
          tags: "tagsClass",
          tagInput: "tagInputClass",
          tagInputField: "tagInputFieldClass",
          selected: "selectedClass",
          tag: "tagClass",
        }}
      />

      <div className="flex justify-between">
        <button
          className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer hover:bg-blue-700 duration-300 text-white"
          type="button"
          onClick={() => dispatch(prevStep())}
        >
          {"<"} Previous
        </button>
        <button
          className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer hover:bg-blue-700 duration-300 text-white"
          onClick={onSubmitForm}
        >
          Save and Continue {">"}
        </button>
      </div>
    </>
  );
};

export default Skills;
