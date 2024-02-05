"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { addNewInf, nextStep } from "@/app/context/FormsSlice";
const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Please enter FirstName is Required" }),
  lastName: z.string().min(3, { message: "Please enter LastName is Required" }),
  email: z.string().min(3, { message: "Please enter Email is Required" }),
  phone: z
    .string()
    .min(3, { message: "Please enter Phone Number is Required" }),
  Birthday: z.string(),
  gender: z.string(),
  address: z.string(),
  country: z.string(),
});
const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  console.log(data);
  const {
    formState: { errors },
    handleSubmit,
    register,
    trigger,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      phone: data?.phone,
      gender: data?.gender,
      Birthday: data?.Birthday,
      address: data?.address,
      country: data?.country,
    },
  });

  const onSubmitForm = (data) => {
    console.log(data);
    dispatch(addNewInf(data));
    dispatch(nextStep());
  };

  return (
    <>
      <h1 className="tex text-5xl font-bold">Personal Info</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>

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

        <div>
          <label htmlFor="">Email</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("email")}
            type="email"
            placeholder="Email"
          />
          <p>
            {errors.email?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.email.message}
              </span>
            )}
          </p>
        </div>

        <div>
          <label htmlFor="">Phone Number</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("phone")}
            type="text"
            placeholder="+213 4555454"
          />
          <p>
            {errors.phone?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.phone.message}
              </span>
            )}
          </p>
        </div>

        <div>
          <label htmlFor="">Date of Birthday</label>
          <label htmlFor="date">
            <input
              id="date"
              className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
              {...register("Birthday")}
              type="date"
              placeholder="+213 4555454"
            />
          </label>
          <p>
            {errors.Birthday?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.Birthday.message}
              </span>
            )}
          </p>
        </div>

        <div>
          <label htmlFor="">Your Location Address</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("address")}
            type="text"
            placeholder="city, state, country"
          />
          <p>
            {errors.address?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.address.message}
              </span>
            )}
          </p>
        </div>

        <div>
          <label htmlFor="">Select Your Gender</label>
          <select
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("gender")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <p>
            {errors.gender?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.gender.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Your Country of Residence</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("country")}
            type=""
            placeholder="Your Country of Residence"
          />
          <p>
            {errors.country?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.country.message}
              </span>
            )}
          </p>
        </div>

        <div className="flex justify-end">
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

export default PersonalInfo;
