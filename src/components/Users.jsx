import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-500 text-center py-4 text-3xl text-white">
      UserId : {userId}
    </div>
  );
}

export default Users;
