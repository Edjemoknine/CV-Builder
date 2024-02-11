"use client";

const SubscribeButton = ({ priceId, customerId,plan }) => {
  // console.log(priceId);
  const handleSubscription = async () => {
    try {
      const res = await fetch("/api/subscriptions", {
        method: "POST",
        body: JSON.stringify({ priceId, customerId,plan }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center py-6">
      <button
        onClick={handleSubscription}
        className="border text-sky-500 font-medium border-sky-500 px-4 py-2 rounded-lg hover:text-white hover:bg-sky-500 duration-300"
      >
        Choose Plan
      </button>
    </div>
  );
};

export default SubscribeButton;
