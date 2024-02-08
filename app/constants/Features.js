import {
  BrainCircuit,
  Contact,
  Palette,
  BookTemplate,
  SearchCheck,
  FileArchive,
} from "lucide-react";

export const features = [
  {
    icon: <BrainCircuit size={35} className=" text-sky-500  text-3xl" />,
    title: "AI resume builder",
    description:
      "Use AI-enabled resume suggestions in the Resume Builder app to write a keyword-rich resume.",
  },
  {
    icon: <Contact size={35} className=" text-sky-500  text-3xl" />,
    title: "Professional templates",
    description:
      "Choose from over 30 applicant tracking systems (ATS)-friendly modern and professional templates.",
  },
  {
    icon: <FileArchive size={35} className=" text-sky-500  text-3xl" />,
    title: "Free resume examples",
    description:
      "Use our more than 500 resume examples and templates to see what a great resume looks like in your field.",
  },
  {
    icon: <BookTemplate size={35} className=" text-sky-500  text-3xl" />,
    title: "ATS-friendly templates",
    description:
      "Sail through applicant tracking systems with resume templates that appeal to both machines and humans.",
  },
  {
    icon: <Palette size={35} className=" text-sky-500  text-3xl" />,
    title: "Customize fonts and colors",
    description: "Select custom fonts and colors on any resume template.",
  },
  {
    icon: <SearchCheck size={35} className=" text-sky-500  text-3xl" />,
    title: "Expert tips and guidance",
    description:
      "Get help every step of the way as you build your resume with expert tips and suggested phrases.",
  },
];
