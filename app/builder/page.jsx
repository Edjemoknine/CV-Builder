"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { imagesCv } from "../../public/index";
import {
  Template0,
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7,
  Template8,
} from "../template/index";
import { useSearchParams } from "next/navigation";

const Builder = () => {
  const { data } = useSelector((store) => store);
  // console.log(data);
  const searchParams = useSearchParams();
  const STupNum = Number(searchParams.get("TempNum")) || 0;
  const [TempNum, setTempNum] = useState(STupNum);

  const templateRender = () => {
    if (TempNum === 0) return <Template0 data={data} />;
    if (TempNum === 1) return <Template1 data={data} />;
    if (TempNum === 2) return <Template2 data={data} />;
    if (TempNum === 3) return <Template3 data={data} />;
    if (TempNum === 4) return <Template4 data={data} />;
    if (TempNum === 5) return <Template5 data={data} />;
    if (TempNum === 6) return <Template6 data={data} />;
    if (TempNum === 7) return <Template7 data={data} />;
    if (TempNum === 8) return <Template8 data={data} />;
  };

  const [loading, setloading] = useState(false);
  const downloadPDF = () => {
    setloading(true);
    const capture = document.querySelector(".pdf");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const Comwith = doc.internal.pageSize.getWidth();
      const Comheight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, Comwith, Comheight);
      setloading(false);
      doc.save("resume.pdf");
    });
  };

  return (
    <section className="max-w-6xl  mx-auto px-4 md:px-8">
      <button
        className="absolute md:right-20 top-[85px] hover:bg-sky-700 duration-300 right-4 px-3 py-1.5 rounded-md bg-sky-500 text-sm text-white"
        disabled={loading}
        onClick={downloadPDF}
      >
        {" "}
        {loading ? "Downloading.." : "Download"}
      </button>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Review your resume</h1>
        <p>
          Review and make any final changes to your resume. Then download and
          apply for jobs!
        </p>
      </div>
      <div className="grid md:grid-cols-7  grid-cols-1 w-full gap-6 mt-10 ">
        <div className="md:col-span-5 w-full shadow-lg">{templateRender()}</div>
        <div className="w-full col-span-2">
          <div className=" bg-red-40 flex flex-wrap gap-x-2 ">
            {imagesCv.map((cv, i) => (
              <div onClick={() => setTempNum(i)} className="h-40 w-24 ">
                <Image
                  className={`object-contain shadow cursor-pointer hover:border-2 border-sky-500 ${
                    TempNum === i && "border-2"
                  }`}
                  src={cv}
                  alt={"resume"}
                  height={200}
                  width={150}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Builder;
