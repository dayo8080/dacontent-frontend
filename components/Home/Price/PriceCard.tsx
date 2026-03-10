import React from "react";

type Props = {
  price: string;
  title: string;
};

const PriceCard = ({ price, title }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <h1 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mt-4 tracking-wider">
        {title}
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-200 mt-4">
        Monthly Package
      </p>
      <h1 className="font-bold text-center text-gray-900 dark:text-gray-100 mt-4">
        <span className="text-5xl">{price}</span>
      </h1>
      <div className="text-center mt-8 space-y-4 text-sm text-gray-500 tracking-wider dark:text-gray-100">
        <p>Unlimited Updates & Projects</p>
        <p>Custom permissions</p>
        <p>Custom instructors</p>
        <p>Custom designs & features</p>
      </div>
      <div className="mt-6 mb-6 text-center">
        <button className="px-8 py-3 bg-pink-500 dark:bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-700 transition-all duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
