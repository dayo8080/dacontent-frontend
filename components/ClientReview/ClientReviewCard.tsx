import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

type Props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ClientReviewCard = ({ user }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20" />
      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
      </div>
    </div>
  );
};

export default ClientReviewCard;
