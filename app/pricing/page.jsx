import { Book, Check, X } from "lucide-react";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ManageUserSubsc from "../components/ManageUserSubsc";
import { getUserSubscriptionPlan } from "../../helpers/subscription";

const Pricing = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  const subscripe = await getUserSubscriptionPlan();
  console.log(subscripe);
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 pt-40">
      <div className="mb-32">
        <h1 className="text-4xl font-bold my-6 text-center">Pricing Plans</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-xl p-3">
          <div className="flex flex-col items-center py-3 gap-4 mb-3">
            <h2 className="font-extrabold text-[24px] ">Free</h2>
            <Book className="text-sky-500" size={90} />
            <div>
              <h1 className="text-5xl font-extrabold text-sky-500">$0</h1>
              <p className="text-gray-500 text-center mt-3 text-xs">
                Per Month
              </p>
            </div>
          </div>
          <ul>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> limited Resume Building
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> 1 Resume Template
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <X className="text-red-500" /> No AI Writing
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <X className="text-red-500" /> No AI Helps
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <X className="text-red-500" /> No Expert Guidance
            </li>
          </ul>
          <ManageUserSubsc
            userId={session.user.email}
            stripeCustomerId={subscripe.stripeCustomerId}
            stripePriceId={subscripe.stripePriceId}
            isCanceled={subscripe.isCanceled}
            isSubscribed={subscripe.isSubscribed}
            // isCurrentPlan={subscripe.}
          />
        </div>
        <div className="bg-white shadow-xl -translate-y-10 p-3">
          <div className="flex flex-col items-center py-3 gap-4 mb-3">
            <h2 className="font-extrabold text-[24px] ">Populair</h2>
            <Book className="text-sky-500" size={90} />
            <div>
              <h1 className="text-5xl font-extrabold text-sky-500">$6</h1>
              <p className="text-gray-500 text-center mt-3 text-xs">
                Per Month
              </p>
            </div>
          </div>
          <ul>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> Inlimited Resume Building
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> 5 Resume Templates
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> Fonts and Colors Customize
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> 3 times AI Helps
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <X className="text-red-500" /> No Expert Guidance
            </li>
          </ul>
          <ManageUserSubsc
            userId={session.user.email}
            stripeCustomerId={subscripe.stripeCustomerId}
            stripePriceId={subscripe.stripePriceId}
            isCanceled={subscripe.isCanceled}
            isSubscribed={subscripe.isSubscribed}
            // isCurrentPlan={subscripe.}
          />
        </div>
        <div className="bg-white shadow-xl p-3">
          <div className="flex flex-col items-center py-3 gap-4 mb-3">
            <h2 className="font-extrabold text-[24px] ">Pro</h2>
            <Book className="text-sky-500" size={90} />
            <div>
              <h1 className="text-5xl font-extrabold text-sky-500">$10</h1>
              <p className="text-gray-500 text-center mt-3 text-xs">
                Per Month
              </p>
            </div>
          </div>
          <ul>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> Inlimited Resume Building
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> 30 Resume Template
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> Fonts and Colors Customize
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> Inlimited AI Helps
            </li>
            <li className="border-t p-4 flex items-center gap-3  text-sm text-gray-700">
              <Check className="text-sky-500" /> Expert Guidance
            </li>
          </ul>
          <ManageUserSubsc
            userId={session.user.email}
            stripeCustomerId={subscripe.stripeCustomerId}
            stripePriceId={subscripe.stripePriceId}
            isCanceled={subscripe.isCanceled}
            isSubscribed={subscripe.isSubscribed}
            // isCurrentPlan={subscripe.}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;