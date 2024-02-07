"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { Github, Linkedin, Link } from "lucide-react";

const Builder = () => {
  const { data } = useSelector((store) => store);
  console.log(data);
  return (
    <div className=" bg-white rounded-md  max-w-6xl min-h-screen h-full mx-auto p-3">
      <div className="grid md:grid-cols-3 grid-cols-1 h-full ">
        <div className="p-6 text-gray-300 bg-blue-950 min-h-screen  rounded-md h-full">
          <div>
            {data?.imageUrl && (
              <Image src={imageUrl} width={200} height={200} alt="avatar" />
            )}
            <div>
              <h2 className=" border-b-4 py-2 text-2xl font-bold">About Me</h2>
              <p className="mt-3">{data?.data?.aboutMe}</p>
            </div>
            <div>
              <h2 className="border-b-4 py-2 text-2xl font-bold">
                Competencies
              </h2>
              <ul className="mt-3">
                {data?.competence?.map((cop) => (
                  <li key={cop.id}>{cop.text}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className=" border-b-4 py-2 text-2xl font-bold">Interests</h2>
              <p className="mt-3">{data?.data?.interests}</p>
            </div>
            <div>
              <h2 className="border-b-4 py-2 text-2xl font-bold">Languages</h2>
              <p className="mt-3">
                {data?.languages.map((lang) => (
                  <p key={lang.id}>{lang.text}</p>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 col-span-2">
          <div>
            <h1 className="text-4xl mb-2 font-bold uppercase">
              {data?.firstName} {data?.lastName}
            </h1>
            <h3 className="text-xl">{data?.position}</h3>

            <div className="mt-4">
              <div className="flex items-center gap-10">
                <span>
                  <p className="font-bold">Phone</p>
                  <p className="text-xs">{data?.phone}</p>
                </span>
                <span>
                  <p className="font-bold">Email</p>
                  <p className="text-xs">{data?.email}</p>
                </span>
                <span>
                  <p className="font-bold">Address</p>
                  <p className="text-xs">{data?.address}</p>
                </span>
              </div>
              <div className="flex my-4 items-center gap-10">
                <span className="flex gap-2">
                  <Linkedin className=" p-1 border rounded-full" />
                  <a href="">Linkedin</a>
                </span>
                <span className="flex gap-2">
                  <Github className=" p-1 border rounded-full" />
                  <a href="">Github</a>
                </span>
                <span className="flex gap-2">
                  <Link className=" p-1 border rounded-full" />
                  <a href="">Portfolio</a>
                </span>
              </div>
              <div>
                <h2 className=" border-b-4 py-2 text-2xl font-bold">
                  Experience
                </h2>
                <p className="mt-3">{data?.aboutMe}</p>
              </div>
              <div>
                <h2 className=" border-b-4 py-2 text-2xl font-bold">
                  Projects
                </h2>
                <p className="mt-3">{data?.aboutMe}</p>
              </div>
              <div>
                <h2 className=" border-b-4 py-2 text-2xl font-bold">Skills</h2>
                <p className="mt-3">{data?.aboutMe}</p>
              </div>
              <div>
                <h2 className=" border-b-4 py-2 text-2xl font-bold">
                  Education
                </h2>
                <p className="mt-3">{data?.aboutMe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
