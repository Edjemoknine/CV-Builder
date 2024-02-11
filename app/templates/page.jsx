"use client";

import Image from "next/image";
import React from "react";
import { imagesCv } from "../../public/index";
import { useRouter } from "next/navigation";

const Templates = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl px-4 md:px-8 mx-auto">
      <div>
        <h1 className="md:text-4xl text-2xl font-bold my-8 text-center max-w-2xl md:leading-normal mx-auto">
          Choose Your Resume Template and Get Your Dream Job With Us.
        </h1>
        <p className="mb-10 leading-7 text-gray-700 max-w-4xl text-center mx-auto">
          Using the Resume Builder app, you have a 30% higher chance of getting
          a job, and our users experience a 42% higher response rate from
          recruiters. You’ll get expert guidance every step of the way, with
          more than 30 professional resume templates and AI-enabled suggestions
          to write a resume that gets results.
        </p>
      </div>
      <div className=" flex flex-wrap gap-4 ">
        {imagesCv.map((cv, i) => (
          <div
            key={i}
            onClick={() => router.push(`/wizard/?TempNum=${i}`)}
            className="mb-3 hover:shadow-md h-52 w-40 "
          >
            <Image
              className={`object-contain shadow-lg cursor-pointer hover:border-2 border-sky-500 
               
              `}
              src={cv}
              alt={"resume"}
              height={300}
              width={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
