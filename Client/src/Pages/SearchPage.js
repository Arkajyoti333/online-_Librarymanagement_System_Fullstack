import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import emptySearch from "../assets/empty-search.svg";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const allBooks = useSelector((state) => state.books);
  const { books } = allBooks;
  const toggler = useSelector((state) => state.toggler);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const topics = [
    "Personal Growth",
    "Business",
    "Career and Success",
    "History",
    "Lifestyle",
    "Technology",
    "Health and Fitness",
    "Leadership & Entrepreneurs",
    "Marketing and sales",
  ];
  const [topic, setTopic] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [choseTopic, setChoseTopic] = useState("");

  const handleSearch = (type, content) => {
    console.log(content);
    let filteredData;
    if (type === "byInput") {
      if (topic) {
        filteredData = books.filter((data) => {
          return (
            data.authorname.includes(topic) || data.bookname.includes(topic)
          );
        });
      }
    } else {
      setChoseTopic(content);
      filteredData = books.filter((data) => {
        return data.type === content;
      });
    }
    setSearchedData(filteredData);
  };

  return (
    <>
      <Header />
      <div
        style={{ position: !toggler?.status ? "relative" : "fixed" }}
        className="w[100%] min-h-[100vh] max-h-[100%] bg-gradient-to-b from-gray-800 to-gray-700 pt-[130px] md:pl-5 sm:pl-2 md:pt-[80px] pb-20"
      >
        <div className="ml-80 md:ml-5 sm:ml-1">
          <p className="text-5xl md:text-4xl sm:text-2xl font-bold text-white">
            Browse
          </p>
          <div className="mt-5 relative flex justify-start items-center">
            <div className="absolute top-4 xsm:top-2 left-3 text-xl text-white">
              <IoSearch />
            </div>
            <input
              onChange={(e) => setTopic(e.target.value)}
              className="w-[400px] sm:w-[290px] xsm:w-[230px] xsm:text-sm  py-2 pl-12 sm:pl-10 outline-none text-xl sm:text-lg text-white rounded-full bg-slate-500"
              type="text"
              placeholder="Title, Author or Keyword.."
            ></input>
            <button
              onClick={() => handleSearch("byInput")}
              className="w-[200px] sm:w-[130px] xsm:w-[100px] xsm:text-sm xsm:p-2 bg-slate-900 ml-2 rounded-3xl p-3 text-white text-lg"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-7 ml-80 md:ml-5 sm:ml-1">
          <p className="text-5xl md:text-4xl sm:text-2xl font-bold text-white">
            By Topic
          </p>
          <div className="flex justify-start items-center flex-wrap w-[70%] md:w-[100%] mt-5">
            {topics.map((topic, idx) => (
              <p
                style={{
                  background: choseTopic === topic ? "white" : "",
                  color: choseTopic === topic ? "black" : "",
                }}
                onClick={() => handleSearch("byTopic", topic)}
                key={idx}
                className="p-2 text-white rounded-lg m-1 bg-slate-600 shadow-md cursor-pointer"
              >
                {topic}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-7 md:ml-5 sm:ml-1">
          <p className="text-5xl md:text-4xl sm:text-2xl font-bold text-white ml-80 md:ml-5 sm:ml-1">
            Related Searches
          </p>
          <div className="w-[100%] flex flex-wrap justify-start sm:justify-self-start items-center  mt-5 pl-80 md:pl-5 sm:pl-0">
            {searchedData?.length > 0 ? (
              searchedData?.map((data, idx) => (
                <BookCard key={idx} data={data} />
              ))
            ) : (
              <div className="w-[400px] sm:w-[350px] xsm:w-[300px] ml-52 sm:ml-0">
                <img src={emptySearch} alt="empty"></img>
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default SearchPage;
