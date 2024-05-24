import React from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/search" && (
        <div
          onClick={() => navigate("/search")}
          className="flex justify-between text-slate-700 font-semibold px-3 items-center md:hidden w-[200px] h-[30px] rounded-lg bg-gradient-to-r from-slate-500 to-slate-300 cursor-pointer"
        >
          <p>Search Books..</p>
          <IoSearch />
        </div>
      )}
    </>
  );
};

export default SearchBar;
