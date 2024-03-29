import React from "react";
import { Github, Linkedin, Link } from "lucide-react";

const Template1 = ({ data }) => {
  return (
    <div className="col-span-4 pdf bg-white rounded-md  p-3">
      <div className="grid grid-cols-3 text-xs  h-full ">
        <div className="p-2 text-gray-300 bg-blue-950 min-h-screen  rounded-md h-full">
          <div className="flex flex-col gap-5">
            {data?.imageUrl && (
              <Image src={imageUrl} width={200} height={200} alt="avatar" />
            )}
            <div>
              <h2 className=" border-b-4 py-2 text-xs font-bold">About Me</h2>
              <p className="mt-3 text-[8px]">{data?.data?.aboutMe}</p>
            </div>
            <div>
              <h2 className="border-b-4 py-2 text-sm font-bold">
                Competencies
              </h2>
              <ul className="mt-3">
                {data?.Competencies?.map((cop) => (
                  <li className="mb-2" key={cop.id}>
                    {cop.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className=" border-b-4 py-2 text-sm font-bold">Interests</h2>
              <p className="mt-3">{data?.data?.interests}</p>
            </div>
            <div>
              <h2 className="border-b-4 py-2 text-sm font-bold">Languages</h2>
              <p className="mt-3">
                {data?.Languages?.map((lang) => (
                  <p key={lang.id}>{lang.text}</p>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 col-span-2">
          <div>
            <h1 className="text-xl mb-2 font-bold uppercase">
              {data?.firstName} {data?.lastName}
            </h1>
            <h3 className="text-xs">{data?.data?.role}</h3>

            <div className="mt-4">
              <div className="flex items-center gap-3">
                <span>
                  <p className="font-bold text-[8px]">Phone</p>
                  <p className="text-[5px]">{data?.phone}</p>
                </span>
                <span>
                  <p className="font-bold text-[8px]">Email</p>
                  <p className="text-[5px]">{data?.email}</p>
                </span>
                <span>
                  <p className="font-bold text-[8px]">Address</p>
                  <p className="text-[5px]">{data?.address}</p>
                </span>
              </div>
              <div className="flex my-4 items-center gap-3 text-[8px]">
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
              <div>
                <h2 className=" border-b-4 py-2 text-sm font-bold">
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
                          {exp.from} - {exp.to}
                        </span>
                      </div>
                      <p className="mt-2 text-[8px] w-[70%]">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className=" border-b-4 py-2 text-sm font-bold">Projects</h2>
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
                      <p className="mt-2 font-medium text-[8px]">{pro.tech}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className=" border-b-4 py-2 text-sm font-bold">Skills</h2>
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
              <div>
                <h2 className=" border-b-4 mt-5 py-2 text-sm font-bold">
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
                      <p className="mt-3 text-xs">{pro.description}</p>
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
                            className="px-3 py-1.5 text-xs bg-sky-500 text-white rounded"
                            href={pro.link}
                          >
                            view
                          </a>
                        </p>
                      </div>
                      <p className="mt-3 text-xs">{pro.description}</p>
                      <p className="mt-3 font-semibold">{pro.tech}</p>
                    </div>
                  ))}
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
