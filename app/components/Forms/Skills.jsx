"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewInf, nextStep, prevStep } from "@/app/context/FormsSlice";
import { useDispatch, useSelector } from "react-redux";
const formSchema = z.object({
  skills: z.string(),
  competenties: z.string(),
  // .min(3, { message: "Please enter skill is Required" }),
  // lastName: z.string().min(3, { message: "Please enter LastName is Required" }),
});
const Skills = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);

  const {
    formState: { errors },
    handleSubmit,
    register,
    trigger,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: data?.skills,
      competenties: data?.competenties,
    },
  });

  const onSubmitForm = (data) => {
    console.log(data);
    dispatch(addNewInf(data));
    dispatch(nextStep());
  };

  return (
    <>
      <h1 className="tex text-5xl font-bold">Skills</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <div>
          <label htmlFor="">Your Skills</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("skills")}
            type="text"
            placeholder="Skills"
          />
          <p>
            {errors.skills?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.skills.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Competenties</label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("competenties")}
            type="text"
            placeholder="Problems solving"
          />
          <p>
            {errors.competenties?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.competenties.message}
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

export default Skills;
