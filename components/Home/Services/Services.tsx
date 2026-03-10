import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Our Services
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Provided Features
        </h1>
      </div>
      {/* Service cards */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <ServiceCard title="Digital Infrastructure Engineering" icon="/images/s1.png" />
        </div>
        <div>
          <ServiceCard title="Software Development" icon="/images/s2.png" />
        </div>
        <div>
          <ServiceCard title="Cloud Computing" icon="/images/s3.png" />
        </div>
        <div>
          <ServiceCard title="Disaster Recovery & Backup" icon="/images/s4.png" />
        </div>
        <div>
          <ServiceCard title="Cyber Security" icon="/images/s5.png" />
        </div>
        <div>
          <ServiceCard title="Technical Support & Maintenance" icon="/images/s6.png" />
        </div>
      </div>
    </div>
  );
};

export default Services;
