"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { signIn, useSession, signOut } from "next-auth/react";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const links = [
  { label: "Resume Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  { label: "My Resume", href: "/builder" },
];
const Navbar = () => {
  const { data } = useSelector((store) => store);
  // console.log(data);
  const showMResume = Object.keys(data).length > 0;
  const { data: session } = useSession();

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setScroll(true) : setScroll(false);
    });
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${
        scroll && "shadow"
      } bg-[#fafafa] sticky z-50 top-0 left-0 w-full`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className=" py-6 relative flex justify-between">
          <Link
            href={"/"}
            className="md:text-2xl text-xl flex items-center gap-2  text-sky-600 font-bold"
          >
            <svg
              id="logo-37"
              width="30"
              height="30"
              viewBox="0 0 42 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
              <path
                d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                className="ccustom"
                fill="#25CAAC"
              ></path>{" "}
            </svg>{" "}
            CV Builder
          </Link>
          <div className="flex items-center gap-3">
            <ul className="hidden md:flex gap-6 items-center">
              {links.map((link) => (
                <Link
                  key={link.label}
                  className={`hover:text-sky-700 duration-300 ${
                    pathname === link.href && "font-medium text-sky-600"
                  } ${!showMResume && link.label === "My Resume" && "hidden"}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className="flex gap-3 text-sm">
              <Link
                className="md:px-4 md:flex hidden  md:py-2 text-xs p-1.5  rounded-lg border hover:bg-sky-600 hover:text-white duration-300 border-sky-600 text-sky-600"
                href={"/wizard"}
              >
                Build My Resume
              </Link>
              <div>
                {!session?.user ? (
                  <button
                    onClick={() => signIn("github")}
                    className="px-3 py-1.5 bg-gradient-to-r from-sky-400 to-green-400 text-white rounded-lg"
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    onClick={() => signOut()}
                    className="px-3 py-1.5 bg-gradient-to-r from-sky-500 to-blue-800 text-white rounded-lg"
                  >
                    Sign Out
                  </button>
                )}
              </div>

              <div
                className="md:hidden flex justify-center items-center border hover:border-sky-700 border-gray-500 group rounded-md cursor-pointer px-2 p-1 hover:b-sky-600"
                onClick={() => setOpen(!open)}
              >
                <Menu className="group-hover:text-sky-700" />
              </div>
            </div>
          </div>
          <ul
            className={`${
              open ? "top-[70px] " : "-top-[300%]"
            } absolute w-full md:hidden bg-gray-300 duration-300 shadow-md flex flex-col p-6 rounded-md justify-center gap-6 items-center text-sm`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                className={`hover:text-sky-700 duration-300 ${
                  pathname === link.href && "font-semibold text-sky-600"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="md:px-4   md:py-2 text-xs p-1.5  rounded-lg border hover:bg-sky-600 hover:text-white duration-300 border-sky-600 text-sky-600"
              href={"/wizard"}
            >
              Build My Resume
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
