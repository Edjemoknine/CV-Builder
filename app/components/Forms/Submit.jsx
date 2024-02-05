"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewInf, nextStep, prevStep } from "@/app/context/FormsSlice";
import { useDispatch, useSelector } from "react-redux";
const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Please enter FirstName is Required" }),
  lastName: z.string().min(3, { message: "Please enter LastName is Required" }),
  email: z.string().min(3, { message: "Please enter Email is Required" }),
  phone: z
    .string()
    .min(3, { message: "Please enter Phone Number is Required" }),
});
const Submit = () => {
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
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="flex flex-col gap-4 w-full"
    >
      <div>
        <label htmlFor="">First Name</label>
        <input
          className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
          {...register("firstName")}
          type="text"
          placeholder="FirstName"
        />
        <p>
          {errors.firstName?.message && (
            <span className="text-red-500 text-[10px]">
              {errors.firstName.message}
            </span>
          )}
        </p>
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input
          className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
          {...register("lastName")}
          type="text"
          placeholder="lastName"
        />
        <p>
          {errors.lastName?.message && (
            <span className="text-red-500 text-[10px]">
              {errors.lastName.message}
            </span>
          )}
        </p>
      </div>

      <div className="flex justify-end">
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
  );
};

export default Submit;
