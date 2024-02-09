"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Page = () => {
  const { data } = useSession();
  const router = useRouter();
  if (data?.user) {
    router.push("/");
  }
  return (
    <div className="min-h-[50vh] grid place-items-center">
      <div className="max-w-xs w-full mx-auto border-sky-500 border-4 shadow-lg rounded-lg p-6 flex flex-col gap-4">
        <p className="text-center text-rose-500">
          Please Sign In To Get Your Resume{" "}
        </p>
        <h1 className="text-2xl font-semibold text-center">Sign In</h1>
        <button
          onClick={() => signIn("github", { callbackUrl: "/builder" })}
          className="text-white font-medium hover:bg-slate-800 duration-300 bg-slate-700 rounded-lg cursor-pointer py-2 px-4"
        >
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default Page;
