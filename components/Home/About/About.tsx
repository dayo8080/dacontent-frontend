import Image from "next/image";

const About = () => {
  return (
    <div className="py-24 dark:bg-gray-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image content */}
        <div>
          <Image src={"/images/a1.png"} alt="img" width={500} height={500} />
        </div>
        {/* Text content */}
        <div>
          {/* Sub heading */}
          <h1 className="text-purple-800 dark:text-purple-600 font-medium">
            About Us
          </h1>
          {/* Heading  */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mt-2">
            We Are The Leader in Technological Solutions
          </h1>
          {/* Description */}
          <p className="text-gray-500 dark:text-gray-200 mt-8 text-base leading-8">
            We are a team of passionate developers dedicated to creating
            innovative and impactful technological solutions for businesses and
            individuals. With a focus on quality, creativity, and customer
            satisfaction, we strive to deliver exceptional results that exceed
            expectations.
          </p>
          <p className="text-gray-500 dark:text-gray-200 mt-4 text-base leading-8">
            We are a team of passionate developers dedicated to creating
            innovative and impactful technological solutions for businesses and
            individuals. With a focus on quality, creativity, and customer
            satisfaction, we strive to deliver exceptional results that exceed
            expectations.
          </p>
          {/* Stats */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">
                  6,500
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Vulnerabilities Fixed
                </p>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">
                  480
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Software Developed
                </p>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">
                  500
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Awards Won
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
