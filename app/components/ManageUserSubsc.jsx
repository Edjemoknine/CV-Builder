"use client";

import { useTransition } from "react";
import { manageSubscriptionsAction } from "../actions/stripe";

const ManageUserSubsc = ({
  stripePriceId,
  stripeCustomerId,
  isSubscribed,
  isCanceled,
  userId,
  //   isCurrentPlan,
}) => {
  console.log(stripePriceId);
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const session = await manageSubscriptionsAction({
          stripeCustomerId,
          stripePriceId,
          isSubscribed,
          isCanceled,
          userId,
        });
        if (session) {
          window.location.href = session.url;
        }
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center py-6">
      <button
        disabled={isPending}
        className="border text-sky-500 font-medium border-sky-500 px-4 py-2 rounded-lg hover:text-white hover:bg-sky-500 duration-300"
      >
        Choose Plan
      </button>
    </form>
  );
};

export default ManageUserSubsc;
