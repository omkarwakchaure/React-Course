import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/omkarwakchaure")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="bg-gray-300 p-2 text-3xl font-bold underline text-center">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git pic" width={300}></img>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/omkarwakchaure");
  return response.json();
};
