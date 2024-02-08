import React from "react";
import {
  Github,
  Linkedin,
  Link,
  Phone,
  Home,
  MessageCircle,
} from "lucide-react";
const Template1 = ({ data }) => {
  return (
    <div className="col-span-4 pdf bg-white rounded-md pb-6 ">
      <div className=" min-h-screen  rounded-md h-full">
        <div className="flex flex-col gap-5">
          <div className="border-b-8 pt-8 px-8 pb-4 bg-orange-50 border-gray-500">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl border-b-4 border-black mb-2 pb-2 uppercase">
                  {data?.firstName}{" "}
                  <span className="font-bold">{data?.lastName}</span>
                </h1>
                <h3 className="text-xl m-0 p-0">{data?.data?.role}</h3>
              </div>
              <div className="flex flex-col items-end gap-4">
                <span className="flex items-center gap-3">
                  <p className="text-xs">{data?.phone}</p>
                  <Phone />
                </span>
                <span className="flex items-center gap-3">
                  <p className="text-xs">{data?.email}</p>
                  <MessageCircle />
                </span>
                <span className="flex items-center gap-3">
                  <p className="text-xs">{data?.address}</p>
                  <Home />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <span className="flex gap-2">
                <Linkedin className=" p-1 border rounded-full" />
                <a href={data?.data?.linkedin}>Linkedin</a>
              </span>
              <span className="flex gap-2">
                <Github className=" p-1 border rounded-full" />
                <a href={data?.data?.github}>Github</a>
              </span>
              <span className="flex gap-2">
                <Link className=" p-1 border rounded-full" />
                <a href={data?.data?.portfolio}>Portfolio</a>
              </span>
            </div>
          </div>
          <div className="px-8">
            <div>
              <h2 className=" border-b-4 py-2 border-gray-400 text-center max-w-xs mx-auto text-2xl font-bold">
                About Me
              </h2>
              <p className="mt-3">{data?.data?.aboutMe}</p>
            </div>

            <div className="grid grid-cols-2 mt-6 gap-6">
              <div>
                <div>
                  <h2 className=" border-b-4 py-2 text-2xl font-bold">
                    Education
                  </h2>
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
                <div>
                  <h2 className="border-b-4 py-2 text-2xl font-bold">
                    Competencies
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {data?.Competencies?.map((cop) => (
                      <li key={cop.id}>{cop.text}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className=" border-b-4 py-2 text-2xl font-bold">
                    Interests
                  </h2>
                  <p className="mt-3">{data?.data?.interests}</p>
                </div>
                <div>
                  <h2 className="border-b-4 py-2 text-2xl font-bold">
                    Languages
                  </h2>
                  <p className="mt-3">
                    {data?.Languages?.map((lang) => (
                      <p key={lang.id}>{lang.text}</p>
                    ))}
                  </p>
                </div>
              </div>
              <div>
                <div className="ml-4 border-l-4 border-gray-300 pl-4">
                  <div>
                    <h2 className=" border-b-4 py-2 text-2xl font-bold">
                      Professional Experience
                    </h2>
                    <div className="mt-3">
                      {data?.experiences?.map((exp) => (
                        <div className="mb-5" key={exp.company}>
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className=" font-semibold">{exp.company}</h3>
                              <p className="font-medium mt-2 text-sm capitalize">
                                {exp.position} {" | "}
                                {exp.from.slice(0, 4)} - {exp.to.slice(0, 4)}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2 text-xs w-[70%]">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className=" border-b-4 py-2 text-2xl font-bold">
                      Projects
                    </h2>
                    <div className="mt-3">
                      {data?.myProjects?.map((pro) => (
                        <div className="mb-6" key={pro.title}>
                          <div className="flex items-start justify-between">
                            <h3 className="text- font-semibold">{pro.title}</h3>

                            <span className="text-sm font-medium">
                              {pro.from.slice(0, 4)} - {pro.to.slice(0, 4)}
                            </span>
                          </div>
                          <p className="mt-2 text-sm">{pro.description}</p>
                          <p className="mt-2 font-medium text-xs">{pro.tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className=" border-b-4 py-2 text-2xl font-bold">
                      Skills
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {data?.Skills?.map((skill) => (
                        <span
                          className="py-1 px-2 text-xs rounded bg-slate-200"
                          key={skill.id}
                        >
                          {skill.text}
                        </span>
                      ))}
                    </div>
                  </div>
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
