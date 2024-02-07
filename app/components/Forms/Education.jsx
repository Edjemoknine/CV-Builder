"use client";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { addNewInf, nextStep, prevStep } from "../../context/FormsSlice";
import { useState } from "react";
const formSchema = z.object({
  eductionLevel: z
    .string()
    .min(3, { message: "Please enter Education Level is Required" }),
  field: z.string(),
  institution: z
    .string()
    .min(3, { message: "Please enter institution is Required" }),
  Instcity: z.string(),
  GraduationYear: z
    .string()
    .min(4, { message: "Please enter Graduation Year is Required" }),
});
const Education = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  const { educations } = data;
  // console.log(experiences);
  const [defaults, setDefaults] = useState(null);
  console.log(defaults);
  const [Educations, setEducations] = useState(
    educations ? [...educations] : []
  );
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    values: {
      eductionLevel: Educations[defaults]?.eductionLevel,
      field: Educations[defaults]?.field,
      institution: Educations[defaults]?.institution,
      Instcity: Educations[defaults]?.Instcity,
      GraduationYear: Educations[defaults]?.GraduationYear,
    },
  });

  const onSubmitForm = (data) => {
    const check = Educations.some(
      (exp) => exp.eductionLevel === data.eductionLevel
    );
    console.log(check);

    if (check) {
      setEducations((Educations) =>
        Educations.map((old) => {
          if (old.eductionLevel === data.eductionLevel) {
            old.eductionLevel = data.eductionLevel;
            old.field = data.field;
            old.institution = data.institution;
            old.Instcity = data.Instcity;
            old.GraduationYear = data.GraduationYear;
          }

          return old;
        })
      );
      setDefaults(null);
      reset();
    } else {
      setEducations((prev) => [...prev, data]);
    }

    reset();
    setDefaults(null);
  };
  const [certafications, setCertafications] = useState([]);
  const [certa, setCerta] = useState({ certafication: "", link: "", date: "" });
  const handleChange = (e) => {
    setCerta({ ...certa, [e.target.name]: e.target.value });
  };
  const addCerta = () => {
    const check = certafications.some(
      (cert) => cert.certafication === certa.certafication
    );
    console.log(check);
    if (check) {
      setCertafications((certafications) =>
        certafications.map((old) => {
          if (old.certafication === certa.certafication) {
            old.certafication = certa.certafication;
            old.link = certa.link;
            old.date = certa.date;
          }
          return old;
        })
      );
    } else {
      setCertafications((prev) => [...prev, certa]);
    }

    // console.log(certafications);
    setCerta({ certafication: "", link: "", date: "" });
  };
  const [Error, setError] = useState("");
  const GoNext = () => {
    if (Educations.length > 0) {
      dispatch(addNewInf({ educations: Educations, certafications }));
      dispatch(nextStep());
    } else {
      setError("Add at least one education achievement");
    }
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const removeExp = (id) => {
    setEducations(Educations.filter((e) => e.eductionLevel !== id));
  };
  const removeCert = (id) => {
    setCertafications(certafications.filter((e) => e.certafication !== id));
  };
  const updateCerta = (cert) => {
    setCerta({
      certafication: cert.certafication,
      link: cert.link,
      date: cert.date,
    });
  };
  return (
    <>
      <h1 className="tex text-5xl font-bold">Education Background</h1>
      <p className="text-xl mb-10 mt-3">
        Please provide your name email, address and phone number.
      </p>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <div className="flex items-center gap-3">
          <div>
            <label htmlFor="">Enter Highest Level of Education</label>
            <input
              className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
              {...register("eductionLevel")}
              type="text"
              placeholder="Education Level"
            />
            <p>
              {errors.eductionLevel?.message && (
                <span className="text-red-500 text-[10px]">
                  {errors.eductionLevel.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label htmlFor="">Field of Education</label>
            <input
              className="px-4 p-2 mt-2 rounded-md border-gray-300 border w-full"
              {...register("field")}
              type="text"
              placeholder="Education Filed"
            />
            <p>
              {errors.field?.message && (
                <span className="text-red-500 text-[10px]">
                  {errors.field.message}
                </span>
              )}
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="">Name of the last institution Attended </label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("institution")}
            type="text"
            placeholder="institution"
          />
          <p>
            {errors.institution?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.institution.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor=""> Address of Institution </label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("Instcity")}
            type="text"
            placeholder="institution Address"
          />
          <p>
            {errors.Instcity?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.Instcity.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="">Graduation Year </label>
          <input
            className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
            {...register("GraduationYear")}
            type="text"
            placeholder="ex: (2020)"
          />
          <p>
            {errors.GraduationYear?.message && (
              <span className="text-red-500 text-[10px]">
                {errors.GraduationYear.message}
              </span>
            )}
          </p>
        </div>

        <div className="mb-6 flex justify-end">
          <button
            className="bg-lime-500 rounded-md px-4 py-2 cursor-pointer hover:bg-blue-700 duration-300 text-white"
            type="submit"
          >
            Add New Experience
          </button>
        </div>
        {Error && <div className="text-red-500 my-3">{Error}</div>}
        {Educations.length > 0 && (
          <div className="my-6 border rounded-md p-3 flex items-center flex-wrap gap-4">
            {Educations.map((exp, i) => (
              <div
                className="bg-slate-200 p-4 flex items-center  m-2 rounded-md"
                key={exp.eductionLevel}
              >
                <p onClick={() => setDefaults(i)} className="cursor-pointer">
                  {exp.eductionLevel} {exp.field}
                </p>
                <span
                  onClick={() => removeExp(exp.eductionLevel)}
                  className="text-red-500 text-xl ml-3 cursor-pointer"
                >
                  x
                </span>
              </div>
            ))}
          </div>
        )}

        <div>
          <h1>Certaficate or Courses</h1>
          <div>
            <input
              className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
              type="text"
              placeholder="certafication title"
              name="certafication"
              value={certa.certafication}
              onChange={handleChange}
            />
            <div className="flex gap-3 my-3">
              <input
                className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
                type="text"
                name="link"
                value={certa.link}
                onChange={handleChange}
                placeholder="certafication Link"
              />
              <input
                className="px-4 mt-2 p-2 rounded-md border-gray-300 border w-full"
                type="date"
                name="date"
                value={certa.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-3 flex justify-end">
            <button
              className="px-4 py-2 rounded-md text-white bg-lime-500"
              onClick={addCerta}
            >
              add
            </button>
          </div>
        </div>

        {/* {Error && <div className="text-red-500 my-3">{Error}</div>} */}
        {certafications.length > 0 && (
          <div className="my-6 border rounded-md p-3 flex items-center flex-wrap gap-4">
            {certafications.map((exp, i) => (
              <div
                className="bg-slate-200 p-4 flex items-center  m-2 rounded-md"
                key={exp?.certafication}
              >
                <p onClick={() => updateCerta(exp)} className="cursor-pointer">
                  {exp?.certafication}
                </p>
                <span
                  onClick={() => removeCert(exp.certafication)}
                  className="text-red-500 text-xl ml-3 cursor-pointer"
                >
                  x
                </span>
              </div>
            ))}
          </div>
        )}

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
            onClick={GoNext}
          >
            Save and Continue {">"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Education;
