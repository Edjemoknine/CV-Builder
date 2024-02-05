"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { addNewInf, nextStep, prevStep } from "@/app/context/FormsSlice";
const formSchema = z.object({
  eductionLevel: z
    .string()
    .min(3, { message: "Please enter Education Level is Required" }),
  institution: z
    .string()
    .min(3, { message: "Please enter institution is Required" }),
  GraduationYear: z
    .string()
    .min(4, { message: "Please enter Graduation Year is Required" }),
});
const Education = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);

  const {
    formState: { errors },
    handleSubmit,
    register,
    trigger,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmitForm = (data) => {
    console.log(data);
    dispatch(addNewInf(data));
    dispatch(nextStep());
  };

  return (
    <>
      <h1 className="tex text-5xl font-bold">Education Background</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <div>
          <label htmlFor="">Enter Highest Level of Education</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("eductionLevel")}
            type="text"
            placeholder="Education Level"
          />
          <p>
            {errors.eductionLevel?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.eductionLevel.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Name of the last institution Attended </label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("institution")}
            type="text"
            placeholder="institution"
          />
          <p>
            {errors.institution?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.institution.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Graduation Year </label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("GraduationYear")}
            type="text"
            placeholder="ex: (2020)"
          />
          <p>
            {errors.GraduationYear?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.GraduationYear.message}
              </span>
            )}
          </p>
        </div>

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
            type="submit"
          >
            Save and Continue {">"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Education;
