import { fetchUser } from "@/api";
import { useEffect } from "react";

function Lesson() {
  const getUserInfo = () => {
    return fetchUser();
  };
  const { loading, data, error } = getUserInfo();
  return (
    <div>
      <div>{loading ? "loading..." : "loaded"}</div>
      <div>{JSON.stringify(data)}</div>
      <div>{error}</div>
    </div>
  );
}

export default Lesson;
