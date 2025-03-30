import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Utilis/rapidapi";
import SideBar from "./SideBar";
import SearchCard from "./SearchCard";

function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };
  return (
    <div className="flex flex-col md:flex-row mt-20">
      <SideBar />
      <div className="w-full md:ml-64 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <div className="grid grid-cols-1 gap-2 p-2">
          {result?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SearchCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
