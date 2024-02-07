"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { addNewInf, nextStep, prevStep } from "../../context/FormsSlice";
import { useState } from "react";
const formSchema = z.object({
  company: z
    .string()
    .min(3, { message: "Please enter Company Name is Required" }),
  position: z.string().min(3, { message: "Please enter position " }),
  description: z.string().min(3, {
    message:
      "Please enter some experience and skills that you gained working there",
  }),
  from: z.string(),
  to: z.string(),
});
const Experience = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  // console.log(data);
  const { experiences } = data;
  // console.log(experiences);
  const [defaults, setDefaults] = useState(null);
  console.log(defaults);
  const [Experiences, setExperiences] = useState(
    experiences ? [...experiences] : []
  );
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    values: {
      company: Experiences[defaults]?.company,
      position: Experiences[defaults]?.position,
      description: Experiences[defaults]?.description,
      from: Experiences[defaults]?.from,
      to: Experiences[defaults]?.to,
    },
  });

  const onSubmitForm = (data) => {
    const check = Experiences.some((exp) => exp.company === data.company);
    console.log(check);

    if (check) {
      setExperiences((Experiences) =>
        Experiences.map((old) => {
          if (old.company === data.company) {
            old.company = data.company;
            old.position = data.position;
            old.description = data.description;
            old.from = data.from;
            old.to = data.to;
          }

          return old;
        })
      );
      setDefaults(null);
      reset();
    } else {
      setExperiences((prev) => [...prev, data]);
    }

    setDefaults(null);
    reset();
  };

  const [Error, setError] = useState("");
  const GoNext = () => {
    if (Experiences.length > 0) {
      dispatch(addNewInf({ experiences: Experiences }));
      dispatch(nextStep());
    } else {
      setError("Add at least one experiment");
    }
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const removeExp = (id) => {
    setExperiences(Experiences.filter((e) => e.company !== id));
  };

  return (
    <>
      <h1 className="tex text-5xl font-bold">Work Experience</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <div>
          <label htmlFor="">Your Comapany Name </label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("company")}
            type="text"
            placeholder="company"
          />
          <p>
            {errors.company?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.company.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Position</label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("position")}
            type="text"
            placeholder="Position"
          />
          <p>
            {errors.position?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.position.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("description")}
            rows={3}
            placeholder="description"
          />
          <p>
            {errors.description?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.description.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Stared Date </label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("from")}
            type="date"
            placeholder="ex: 10/10/2020"
          />
          <p>
            {errors.from?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.from.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Last Date </label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("to")}
            type="date"
            placeholder="ex: 10/04/2015"
          />
          <p>
            {errors.to?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.to.message}
              </span>
            )}
          </p>
        </div>
        <div className="mb-6 flex justify-end">
          <button
            className="bg-lime-500 rounded-md px-4 py-2 cursor-pointer hover:bg-blue-700 duration-300 text-white"
            type="submit"
          >
            Add New Experience
          </button>
        </div>
        {Error && <div className="text-red-500 my-3">{Error}</div>}
        {Experiences.length > 0 && (
          <div className="my-6 border rounded-md p-3 flex items-center flex-wrap gap-4">
            {Experiences.map((exp, i) => (
              <div
                className="bg-slate-200 p-4 flex items-center  m-2 rounded-md"
                key={exp.company}
              >
                <p onClick={() => setDefaults(i)} className="cursor-pointer">
                  {exp.company} Experience
                </p>
                <span
                  onClick={() => removeExp(exp.company)}
                  className="text-red-500 text-xl ml-3 cursor-pointer"
                >
                  x
                </span>
              </div>
            ))}
          </div>
        )}
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
            onClick={GoNext}
            type="button"
          >
            Save and Continue {">"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Experience;
