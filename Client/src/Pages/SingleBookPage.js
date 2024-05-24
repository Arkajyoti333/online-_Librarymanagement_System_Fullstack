import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import bookImage from "../assets/notebook-dynamic-clay.png";
import star from "../assets/star-dynamic-premium.png";
import CardTemplate from "../components/CardTemplate";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../action";

const SingleBookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.slice(6);
  const [bookData, setBookData] = useState();
  const [related, setRelated] = useState();
  const userStatus = useSelector((state) => state.user);
  const toggler = useSelector((state) => state.toggler);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBook = async () => {
      try {
        const book = await axios.get(
          `${process.env.REACT_APP_API_URL}/books/${bookId}`
        );
        setBookData(book);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, [location]);

  useEffect(() => {
    const getSameCategoryBooks = async () => {
      try {
        const sameBooks = await axios.get(
          `${process.env.REACT_APP_API_URL}/books/all/${bookData?.data?.type}`
        );
        setRelated(sameBooks);
      } catch (err) {
        console.log(err);
      }
    };
    getSameCategoryBooks();
  }, [bookData]);

  const handleRelated = (val) => {
    navigate(`/book/${val._id}`);
  };

  const handleRequest = (val) => {
    if (userStatus?.user !== null) {
      navigate(`/book/request/${val._id}`);
    } else {
      dispatch(open());
    }
  };

  return (
    <>
      <Header />
      <div
        style={{ position: !toggler?.status ? "relative" : "fixed" }}
        className="w[100%] h-max pb-20 bg-gradient-to-b from-gray-800 to-gray-700 pt-[80px] overflow-x-hidden"
      >
        <div className="overflow-y-hidden relative -left-3 w-[102%] h-[350px] sm:h-[250px] bg-gray-800 -rotate-3 -top-10">
          <div className="w-[500px] h-[500px] opacity-20 mx-auto sm:w-[350px]">
            <img src={bookImage} alt="book"></img>
          </div>
          <div className="absolute rotate-3 left-[45%] sm:left-[30%] -bottom-10 sm:-bottom-14 w-[200px] h-[300px] sm:w-[160px] sm:h-[260px]">
            <img
              className="w-[100%] h-[100%] object-fill"
              src={bookData?.data?.bookImage}
              alt="solo-book"
            ></img>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[100%]">
          <p className="font-bold text-white text-3xl sm:text-xl">
            {bookData?.data?.bookname.slice(0, 30)}...
          </p>
          <p className="text-slate-200 mt-2 font-semibold text-xl">
            <span className="text-slate-400 ">by</span>{" "}
            {bookData?.data?.authorname}
          </p>
          <div className="flex justify-around items-center bg-gradient-to-r from-emerald-600 to-emerald-300 w-max px-2 mt-2 rounded-sm">
            <img className="w-6 rotate-6 -ml-1" src={star} alt="star"></img>
            <p className="ml-1 font-bold text-slate-800">
              {bookData?.data?.rating}
            </p>
          </div>
          <div className="mt-3">
            <button
              onClick={() => handleRequest(bookData?.data)}
              className="bg-gradient-to-br from-emerald-600 to-emerald-400 p-3 rounded-lg text-black capitalize font-bold shadow-lg"
            >
              Rent @ ₹{bookData?.data?.price}/day
            </button>
          </div>
          <p className="mt-7 text-5xl md:text-4xl sm:text-2xl font-bold text-white">
            Related Books
          </p>
          <div className="flex flex-wrap justify-center sm:justify-around sm:px-3 items-center pr-20 xsm:pr-5 cursor-pointer">
            {related ? (
              related?.data?.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    className="mx-3 md:mx-1 mt-5"
                    onClick={() => handleRelated(data)}
                  >
                    <div className="w-[200px] sm:w-[150px] h-[300px] sm:h-[200px]">
                      <img
                        className="w-[100%] h-[100%] object-cover rounded-sm"
                        src={data?.bookImage}
                      ></img>
                    </div>
                    <div className="flex justify-between items-center pr-2">
                      <div className="flex justify-around items-center bg-gradient-to-r from-emerald-600 to-emerald-300 w-max px-2 mt-1.5 ml-[1px] rounded-sm">
                        <img
                          className="w-6 rotate-6 -ml-1"
                          src={star}
                          alt="star"
                        ></img>
                        <p className="ml-1 font-bold text-slate-800">
                          {data?.rating}
                        </p>
                      </div>
                    </div>
                    <p className="mt-1 font-bold sm:font-semibold text-white text-lg sm:text-sm">
                      {data?.bookname.slice(0, 17)}...
                    </p>
                    <p className="text-slate-200 text-sm">{data?.authorname}</p>
                    <p className="text-white font-semibold mt-1">
                      $ {data?.price}/day
                    </p>
                  </div>
                );
              })
            ) : (
              <CardTemplate origin={"related"} />
            )}
          </div>
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default SingleBookPage;
