import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div>
      <h2 className="bg-gray-300 p-2 text-3xl font-bold underline text-center">User ID: {userid}</h2>
    </div>
  );
}

export default User;
