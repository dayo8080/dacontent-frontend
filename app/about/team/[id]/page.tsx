import React from "react";

const TeamMemberDetails = async ({ params }) => {
  const id = (await params).id;
  return <div className="text-7xl">TeamMemberDetails {id}</div>;
};

export default TeamMemberDetails;
