import { Book, Check, X } from "lucide-react";
import { getServerSession } from "next-auth";
import React from "react";
import SubscribeButton from "../components/SubscribeButton";
import {
  createCustomerIfNull,
  hasSubscription,
  stripe,
} from "../../helpers/stripe";
import mustBeLoggedIn from "../lib/auth";

const getPrices = async () => {
  const prices = await stripe.prices.list();
  return prices.data;
};
const Pricing = async () => {
  const prices = await getPrices();
  const UserLogged = await mustBeLoggedIn();
  // console.log(UserLogged);

  const customer = await createCustomerIfNull();
  const hasSub = await hasSubscription();
  // console.log(prices);

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 pt-40">
      <div className="mb-32">
        <h1 className="text-4xl font-bold my-6 text-center">Pricing Plans</h1>
      </div>
      {hasSub ? (
        <div className="text-center text-xl font-semibold bg-green-400 text-white px-4 py-4 max-w-2xl mx-auto ">
          You have a{" "}
          <span className="text-rose-600 font-bold">{UserLogged.plan}</span>{" "}
          Plan
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-xl p-3">
            <div className="flex flex-col items-center py-3 gap-4 mb-3">
              <h2 className="font-extrabold text-[24px] ">
                {prices[2].nickname}
              </h2>
              <Book className="text-sky-500" size={90} />
              <div>
                <h1 className="text-5xl font-extrabold text-sky-500">
                  ${prices[2].unit_amount / 100}
                </h1>
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
            <SubscribeButton
              plan={prices[2].nickname}
              customerId={customer}
              priceId={prices[2].id}
            />
          </div>
          <div className="bg-white shadow-xl -translate-y-10 p-3">
            <div className="flex flex-col items-center py-3 gap-4 mb-3">
              <h2 className="font-extrabold text-[24px] ">
                {prices[1].nickname}
              </h2>
              <Book className="text-sky-500" size={90} />
              <div>
                <h1 className="text-5xl font-extrabold text-sky-500">
                  ${prices[1].unit_amount / 100}
                </h1>
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
            <SubscribeButton
              plan={prices[1].nickname}
              customerId={customer}
              priceId={prices[1].id}
            />
          </div>
          <div className="bg-white shadow-xl p-3">
            <div className="flex flex-col items-center py-3 gap-4 mb-3">
              <h2 className="font-extrabold text-[24px] ">
                {prices[0].nickname}
              </h2>
              <Book className="text-sky-500" size={90} />
              <div>
                <h1 className="text-5xl font-extrabold text-sky-500">
                  ${prices[0].unit_amount / 100}
                </h1>
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
            <SubscribeButton
              plan={prices[0].nickname}
              customerId={customer}
              priceId={prices[0].id}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
