import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addInitFavBooks, deleteFav } from "../action";
import emptyStore from "../assets/empty-store.svg";

const FavouritePage = () => {
  const dispatch = useDispatch();
  const allBook = useSelector((state) => state.books);
  const { books } = allBook;
  const users = useSelector((state) => state.user);
  const [msg, setMsg] = useState("");

  const favs = books?.filter((book) => {
    return allBook?.favourite?.includes(book?._id);
  });

  const getFavsFromAPI = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/getfav/${users?.user?.id}`
      );
      dispatch(addInitFavBooks(response?.data));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFavourite = async (value) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/deletefav`,
        {
          userId: users?.user?.id,
          bookId: value?._id,
        }
      );
      setMsg(response?.data?.message);
      setTimeout(() => setMsg(""), 3000);
    } catch (err) {
      console.log(err);
    }
    dispatch(deleteFav(value?._id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    users?.user && getFavsFromAPI();
  }, []);
  return (
    <>
      <Header />
      <div className="w[100%] min-h-[100vh] max-h-[100%] bg-gradient-to-b from-gray-800 to-gray-700 pt-[130px] md:pl-5 md:pt-[80px] pb-20">
        <p
          style={{
            translate: msg ? "0%" : "-100%",
          }}
          className="bg-emerald-600 z-50 fixed top-24 left-0 p-2 pl-5 text-lg  ease-in-out duration-300 text-white shadow-lg border-[2px] border-emerald-900"
        >
          Book Removed from FAV!
        </p>
        <div className="ml-32 md:ml-5 sm:ml-1">
          <p className="text-5xl md:text-4xl sm:text-2xl font-bold text-white">
            Favourite Books
          </p>
          <div className="flex flex-wrap justify-start items-center pr-20 xsm:pr-5 ">
            {favs?.length > 0 ? (
              favs?.map((fav, idx) => {
                return (
                  <BookCard
                    key={idx}
                    data={fav}
                    clear={true}
                    delFav={deleteFavourite}
                  />
                );
              })
            ) : (
              <div className="w-[500px] sm:w-[100%] h-[400px] mx-auto mt-20 sm:mt-0">
                <img className="w-[100%] h-[100%]" src={emptyStore}></img>
                <p className="text-center text-2xl sm:text-xl sm:-mt-24 text-white font-bold -mt-14">
                  Favourite list is Empty!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default FavouritePage;
