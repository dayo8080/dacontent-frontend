"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

export const userReviewData = [
  {
    id: 1,
    name: "Alex Johnson",
    profession: "Senior Frontend Developer",
    userImage: "/images/u1.jpg",
    review:
      "The integration with Next.js was seamless. The performance improvements we saw after switching were immediate.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    profession: "Product Designer",
    userImage: "/images/u2.jpg",
    review:
      "Incredible attention to detail in the UI components. It made our prototyping phase twice as fast.",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    profession: "CTO at TechFlow",
    userImage: "/images/u3.jpg",
    review:
      "A robust solution that scales perfectly. The TypeScript support caught several edge cases before they hit production.",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    profession: "Marketing Director",
    userImage: "/images/u4.jpg",
    review:
      "Our conversion rates increased by 15% after implementing the new client testimonial section. Highly recommended.",
  },
];

const ClientReview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="py-20">
      <div className="w-[80%] mx-auto">
        <div>
          <h1 className="text-red-500 dark:text-red-300 font-medium">
            Client reviews
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
            What Our Clients Say About Us
          </h1>
        </div>
        <div className="mt-14">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {userReviewData.map((user) =>{
                return (
                <div key={user.id}>
                  <ClientReviewCard user={user} />
                </div>
                );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
