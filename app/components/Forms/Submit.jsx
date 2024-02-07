"use client";

import { useForm } from "react-hook-form";
import { WithContext as ReactTags } from "react-tag-input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewInf, nextStep, prevStep } from "../../context/FormsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import UploadThing from "../UploadThing";
import Image from "next/image";
import { useState } from "react";

const formSchema = z.object({
  aboutMe: z.string().min(50, {
    message: "Please enter describe yourself at least 50 characters",
  }),
  interests: z.string().min(3, { message: "Please enter Some interests " }),
  avatar: z.any(),
  role: z.string(),
  linkedin: z.string().url(),
  github: z.string().url(),
  portfolio: z.string().url(),
});
const Submit = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  const router = useRouter();
  const searchParams = useSearchParams();
  const imageURL = searchParams.get("imageUrl");
  const [languages, setLanguages] = useState([]);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aboutMe: data?.aboutMe,
      interests: data?.interests,
      role: data?.role,
      linkedin: data?.linkedin,
      github: data?.github,
      portfolio: data?.portfolio,
    },
  });

  const onSubmitForm = (data) => {
    console.log(data);
    dispatch(addNewInf({ imageURL, data, languages }));
    router.push("/builder");
  };
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleDelete = (i) => {
    setLanguages(languages.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setLanguages([...languages, tag]);
  };
  return (
    <>
      <h1 className="tex text-5xl font-bold">About</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>

      {imageURL ? (
        <Image
          src={imageURL}
          width={200}
          height={200}
          className="rounded-full mx-auto border-2 border-sky-600"
          alt="avatar"
        />
      ) : (
        <UploadThing />
      )}

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col mt-6 gap-4 w-full"
      >
        <div className="flex flex-col iems-center gap-3">
          <div>
            <label htmlFor="">LinkedIn Link</label>
            <input
              className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
              {...register("linkedin")}
              type="url"
              placeholder="Linkedin Link ..."
            />
            <p>
              {errors.linkedin?.message && (
                <span className="text-red-500 text-[10px]">
                  {errors.linkedin.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label htmlFor="">Github Link</label>
            <input
              className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
              {...register("github")}
              type="url"
              placeholder="Your Github Link ..."
            />
            <p>
              {errors.github?.message && (
                <span className="text-red-500 text-[10px]">
                  {errors.github.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label htmlFor="">Portfolio Link</label>
            <input
              className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
              {...register("portfolio")}
              type="url"
              placeholder="Your Personal Portfolio link ..."
            />
            <p>
              {errors.portfolio?.message && (
                <span className="text-red-500 text-[10px]">
                  {errors.portfolio.message}
                </span>
              )}
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="">Work Position</label>
          <input
            className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
            {...register("role")}
            type="text"
            placeholder="ex: Software engineer ..."
          />
          <p>
            {errors.role?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.role.message}
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
          <ReactTags
            tags={languages}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            inputFieldPosition="bottom"
            placeholder={"Add Your Languages"}
            autocomplete
            classNames={{
              tags: "tagsClass",
              tagInput: "tagInputClass",
              tagInputField: "tagInputFieldClass",
              selected: "selectedLanguages",
              tag: "tagClass",
              remove: "removeClass",
            }}
          />
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
