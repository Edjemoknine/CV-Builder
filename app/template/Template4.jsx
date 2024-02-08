import React from "react";
import { Github, Linkedin, Link } from "lucide-react";
const Template1 = ({ data }) => {
  return (
    <div className="col-span-4 pdf bg-white rounded-md  p-3">
      <div className="p-6  rounded-md">
        <div className="flex flex-col gap-3 mt-6">
          <div className="flex justify-center flex-col border-t-4 pt-4 border-sky-700 items-center text-center">
            <h1 className="text-2xl mb-2 font-bold uppercase">
              {data?.firstName} {data?.lastName} | {data?.data?.role}
            </h1>
            <p className="text-sm font-semibold">
              {data?.phone} | {data?.address}
            </p>
            <p className="text-xs">{data?.email}</p>

            <div className="flex mt-2 items-center gap-10">
              <a href={data?.data?.linkedin}>
                <Linkedin className=" p-1 border rounded-full" />
              </a>

              <a href={data?.data?.github}>
                <Github className=" p-1 border rounded-full" />
              </a>

              <a href={data?.data?.portfolio}>
                <Link className=" p-1 border rounded-full" />
              </a>
            </div>
          </div>
          <div>
            <div className="relative text-center">
              <span className="z-0 absolute -translate-y-1/2 left-0 top-1/2  w-full border-b-2 border-sky-700"></span>
              <h2 className="z-10 relative bg-sky-700 mx-auto text-gray-200 w-fit px-4 border-b-4 py-2 font-bold">
                About Me
              </h2>
            </div>
            <p className="mt-3">{data?.data?.aboutMe}</p>
          </div>
          <div>
            <div className="relative text-center">
              <span className="z-0 absolute -translate-y-1/2 left-0 top-1/2  w-full border-b-2 border-sky-700"></span>
              <h2 className="z-10 relative bg-sky-700 mx-auto text-gray-200 w-fit px-4 border-b-4 py-2 font-bold">
                Competencies
              </h2>
            </div>
            <ul className="mt-3 flex">
              {data?.Competencies?.map((cop) => (
                <li className="mb-2 flex-[2] bg-white text-center" key={cop.id}>
                  {cop.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="relative text-center">
              <span className="z-0 absolute -translate-y-1/2 left-0 top-1/2  w-full border-b-2 border-sky-700"></span>
              <h2 className="z-10 relative bg-sky-700 mx-auto text-gray-200 w-fit px-4 border-b-4 py-2 font-bold">
                Professional Experience
              </h2>
            </div>

            {/* <h2 className=" border-b-4 py-2 text-2xl font-bold">Experience</h2> */}
            <div className="mt-3">
              {data?.experiences?.map((exp) => (
                <div className="mb-5" key={exp.company}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className=" font-semibold">{exp.company}</h3>
                      <p className="font-medium mt-2 capitalize">
                        {exp.position}
                      </p>
                    </div>
                    <span>
                      {exp.from} - {exp.to}
                    </span>
                  </div>
                  <p className="mt-2 text-xs w-[70%]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative text-center">
              <span className="z-0 absolute -translate-y-1/2 left-0 top-1/2  w-full border-b-2 border-sky-700"></span>
              <h2 className="z-10 relative bg-sky-700 mx-auto text-gray-200 w-fit px-4 border-b-4 py-2 font-bold">
                Relevent Projects
              </h2>
            </div>
            {/* <h2 className=" border-b-4 py-2 text-2xl font-bold">Projects</h2> */}
            <div className="mt-3">
              {data?.myProjects?.map((pro) => (
                <div className="mb-6" key={pro.title}>
                  <div className="flex items-start justify-between">
                    <h3 className="text- font-semibold">{pro.title}</h3>

                    <span>
                      {pro.from} - {pro.to}
                    </span>
                  </div>
                  <p className="mt-2">{pro.description}</p>
                  <p className="mt-2 font-medium text-xs">{pro.tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative text-center">
              <span className="z-0 absolute -translate-y-1/2 left-0 top-1/2  w-full border-b-2 border-sky-700"></span>
              <h2 className="z-10 relative bg-sky-700 mx-auto text-gray-200 w-fit px-4 border-b-4 py-2 font-bold">
                Education
              </h2>
            </div>

            <div className="mt-3">
              {data?.educations?.map((pro) => (
                <div className="mb-4" key={pro.eductionLevel}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className=" font-semibold">
                        {pro.eductionLevel} {pro.field}
                      </h3>
                      <span>{pro.institution}</span>
                    </div>
                    <p className="flex flex-col gap-2 ">
                      <span>{pro.GraduationYear}</span>

                      <span>{pro.Instcity}</span>
                    </p>
                  </div>
                  <p className="mt-3 text-sm">{pro.description}</p>
                  <p className="mt-3 font-semibold">{pro.tech}</p>
                </div>
              ))}
            </div>
            <div className="">
              {data?.certafications?.map((pro) => (
                <div className="mb-4" key={pro.certafication}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className=" font-semibold">{pro.certafication}</h3>
                      <span>{pro.date}</span>
                    </div>
                    <p>
                      <a
                        className="px-3 py-1.5 text-sm bg-sky-500 text-white rounded"
                        href={pro.link}
                      >
                        view
                      </a>
                    </p>
                  </div>
                  <p className="mt-3 text-sm">{pro.description}</p>
                  <p className="mt-3 font-semibold">{pro.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div>
              <div className="relative text-center">
                <span className="z-0 absolute -translate-y-1/2 left-0 top-1/2  w-full border-b-2 border-sky-700"></span>
                <h2 className="z-10 relative bg-sky-700 mx-auto text-gray-200 w-fit px-4 border-b-4 py-2 font-bold">
                  Skills
                </h2>
              </div>

              <div className="mt-3 flex flex-wrap gap-3">
                {data?.Skills?.map((skill) => (
                  <span
                    className="py-1.5 px-3 rounded bg-slate-200"
                    key={skill.id}
                  >
                    {skill.text}
                  </span>
                ))}
              </div>
            </div>

            {/* <div>
              <h2 className=" border-b-4 py-2 text-2xl font-bold">Interests</h2>
              <p className="mt-3">{data?.data?.interests}</p>
            </div>
            <div>
              <h2 className="border-b-4 py-2 text-2xl font-bold">Languages</h2>
              <p className="mt-3">
                {data?.Languages?.map((lang) => (
                  <p key={lang.id}>{lang.text}</p>
                ))}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
