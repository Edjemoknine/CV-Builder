"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewInf, nextStep, prevStep } from "@/app/context/FormsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const formSchema = z.object({
  aboutMe: z.string().min(50, {
    message: "Please enter describe yourself at least 50 characters",
  }),
  interests: z.string().min(3, { message: "Please enter Some interests " }),
  communications: z
    .string()
    .min(3, { message: "Please enter language you can speak " }),
  avatar: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});
const Submit = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  const router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    register,
    trigger,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aboutMe: data?.aboutMe,
      interests: data?.interests,
      communications: data?.communications,
    },
  });

  const onSubmitForm = (data) => {
    var imagesFiles = data.avatar;

    // let arr = [];

    // for (let i = 0; i < imagesFiles.length; i++) {
    //   const data = await uploadCloud(imagesFiles[i]);
    //   arr.push(data);
    // }
    // const images = arr?.map((image) => image.url);

    console.log(data);
    dispatch(addNewInf(data));
    router.push("/builder");
  };

  return (
    <>
      <h1 className="tex text-5xl font-bold">About</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <div>
          <label htmlFor="">Add Your Picture</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("avatar")}
            type="file"
            placeholder="I'm as Software Developer ..."
          />
          <p>
            {errors.avatar?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.avatar.message}
              </span>
            )}
          </p>
        </div>

        <div>
          <label htmlFor="">Describe Your Self</label>
          <textarea
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("aboutMe")}
            rows={5}
            placeholder="I'm as Software Developer ..."
          />
          <p>
            {errors.aboutMe?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.aboutMe.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Your Interests</label>
          <textarea
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("interests")}
            rows={5}
            placeholder="Interested about ..."
          />
          <p>
            {errors.interests?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.interests.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Communication Languages</label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("communications")}
            type="text"
            placeholder="English"
          />
          <p>
            {errors.communications?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.communications.message}
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

export default Submit;
