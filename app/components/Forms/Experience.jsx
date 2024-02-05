"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { addNewInf, nextStep, prevStep } from "@/app/context/FormsSlice";
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

  const {
    formState: { errors },
    handleSubmit,
    register,
    trigger,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: data?.company,
      position: data?.position,
      description: data?.description,
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
            {errors.comapany?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.comapany.message}
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
            rows={5}
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

export default Experience;
