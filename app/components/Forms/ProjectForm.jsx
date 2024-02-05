"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewInf, nextStep, prevStep } from "@/app/context/FormsSlice";
import { useDispatch, useSelector } from "react-redux";
const formSchema = z.object({
  title: z.string().min(3, { message: "Please enter Project Name " }),

  description: z.string().min(3, {
    message: "Please enter some feature that you add to this project",
  }),
  tech: z.string(),
  from: z.string(),
  to: z.string(),
});
const ProjectForm = () => {
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
      title: data?.title,
      description: data?.description,
      tech: data?.tech,
      from: data?.from,
      to: data?.to,
    },
  });

  const onSubmitForm = (data) => {
    console.log(data);
    dispatch(addNewInf(data));
    dispatch(nextStep());
  };

  return (
    <>
      <h1 className="tex text-5xl font-bold"> Projects</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <div>
          <label htmlFor="">Project title</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("title")}
            type="text"
            placeholder="Project Title"
          />
          <p>
            {errors.title?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.title.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("description")}
            type="text"
            placeholder="Description about this project"
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
          <label htmlFor="">Techonlogies used</label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("tech")}
            type="text"
            placeholder="Add Technologie that you have used in this project "
          />
          <p>
            {errors.tech?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.tech.message}
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

export default ProjectForm;
