import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <p className="bg-gray-700 py-4 text-center text-white text-3xl">
        Followers : {data.followers}
      </p>
      <img
        className="block mx-auto right-0 left-0"
        src={data.avatar_url}
        alt="githubImage"
      />
    </div>
  );
}

export const githubFinder = async () => {
  const response = await fetch("https://api.github.com/users/Ankush-Ladani");
  return response.json();
};

export default Github;
