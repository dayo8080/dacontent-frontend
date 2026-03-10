import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return <div className="py-20 bg-[#eff3f6] dark:bg-gray-900 ">
    <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Pricing Plan
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Live Chat 24/7 Support
        </h1>
      </div>
      <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
        {/* Price card */}
        <div>
            <PriceCard price="$19.99" title="Basic Plan" />
        </div>
        <div>
            <PriceCard price="$49.99" title="Designer Plan" />
        </div>
        <div>
            <PriceCard price="$69.99" title="Technical Plan" />
        </div>
        <div>
            <PriceCard price="$99.99" title="Grand Master Plan" />
        </div>
      </div>
    </div>;
};

export default Price;
