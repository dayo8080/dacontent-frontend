import React from "react";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaHammer, FaRocket } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className="py-20">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-red-500 dark:text-red-300 font-medium">
            Why Choose Us
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
            We Provide The Best Technological Solutions For Your Business
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-300 leading -7">
            We are a team of passionate Engineers dedicated to creating
            innovative and impactful technological solutions for businesses and
            individuals. With a focus on quality, creativity, and customer
            satisfaction, we strive to deliver exceptional results that exceed
            expectations.
          </p>
          <div className="mt-8">
            {/* 1st list item */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-red-600 dark:bg-pink-500">
                <FaRocket className="text-white h-6 w-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Fast Working Process
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  We are a team of passionate Engineers dedicated to creating
                </p>
              </div>
            </div>
            {/* 2nd list item */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-blue-600 dark:bg-indigo-400">
                <FaHammer className="text-white h-6 w-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Dedicated Team
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  We are a team of passionate Engineers dedicated to creating
                </p>
              </div>
            </div>
            {/* 3rd list item */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-green-600 dark:bg-yellow-400">
                <BiSupport className="text-white h-6 w-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  24/7 Support
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  We are a team of passionate Engineers dedicated to creating
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image content */}
        <div>
          <Image src={"/images/wc.png"} alt="img" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
