import React from "react";
import { Github, Linkedin, Link } from "lucide-react";
const Template1 = ({ data }) => {
  return (
    <div className="col-span-4 pdf bg-white rounded-md relative  p-3">
      <div className="p-6 text-gray-800 min-h-screen  rounded-md h-full">
        <div className="flex flex-col">
          <div className="flex justify-between flex-col bred-400">
            <div>
              <h1 className="text-4xl mb-2 font-bold uppercase">
                {data?.firstName} {data?.lastName}
              </h1>

              <div className="flex items-center gap-10">
                <p className="text-xs">{data?.phone}</p>

                <p className="text-xs">{data?.email}</p>

                <p className="text-xs">{data?.address}</p>
              </div>
            </div>
            <div className="flex flex-co my-4  items-center gap-4">
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
            <h2 className="border-t-4 py-2 text-2xl font-bold">
              {data?.data?.role}
            </h2>
            <p className="mt-3">{data?.data?.aboutMe}</p>
          </div>
          <div>
            <h2 className="border-t-4 mt-6  py-2 text-2xl font-bold">
              Competencies
            </h2>
            <ul className="mt-3 flex flex-wrap justify-between max-w-[80%] gap-4">
              {data?.Competencies?.map((cop) => (
                <li className="mb-2" key={cop.id}>
                  {cop.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="mt-4">
            <div>
              <h2 className=" border-t-4 py-2 text-2xl font-bold">
                Experience
              </h2>
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
                        {exp.from.slice(0, 7)} - {exp.to.slice(0, 7)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs w-[70%]">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className=" border-t-4 py-2 text-2xl font-bold">Projects</h2>
              <div className="mt-3">
                {data?.myProjects?.map((pro) => (
                  <div className="mb-6" key={pro.title}>
                    <div className="flex items-start justify-between">
                      <h3 className="text- font-semibold">{pro.title}</h3>

                      <span>
                        {pro.from.slice(0, 7)} - {pro.to.slice(0, 7)}
                      </span>
                    </div>
                    <p className="mt-2">{pro.description}</p>
                    <p className="mt-2 font-medium text-xs">{pro.tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pb-4">
              <h2 className=" border-t-4 pt-3 py-2 text-2xl font-bold">
                Skills
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
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
            <div className="flex items-start border-t-4 mt-6 pt-4">
              <div className="flex-[3] border-r-4 pr-4 mr-4">
                <h2 className=" py-2  text-2xl font-bold">Education</h2>
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
                <div className="mt-3">
                  {data?.certafications?.map((pro) => (
                    <div className="mb-4" key={pro.certafication}>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className=" font-semibold">
                            {pro.certafication}
                          </h3>
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
              <div className=" flex-[2]  ">
                <h2 className=" py-2 text-2xl font-bold">Languages</h2>
                <p className="mt-3">
                  {data?.Languages?.map((lang) => (
                    <p key={lang.id}>{lang.text}</p>
                  ))}
                </p>

                <div>
                  <h2 className=" border-b-4 py-2 text-2xl font-bold">
                    Interests
                  </h2>
                  <p className="mt-3">{data?.data?.interests}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
