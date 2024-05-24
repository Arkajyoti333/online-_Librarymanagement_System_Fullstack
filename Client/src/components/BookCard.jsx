import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import star from "../assets/star-dynamic-premium.png";

const BookCard = ({ data, clear, delFav }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate(`/book/${data?._id}`);
  };

  const handleDelFav = () => {
    delFav(data);
  };

  return (
    <div className="m-3 w-72 p-4 bg-white rounded-md shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div onClick={handleBook} className="cursor-pointer">
        <img
          className="w-full h-48 object-cover rounded-md"
          src={data?.bookImage}
          alt="book"
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-gradient-to-r from-emerald-600 to-emerald-300 px-2 py-1 rounded-md">
            <img className="w-5 h-5" src={star} alt="star" />
            <p className="ml-1 text-slate-800 font-semibold">{data?.rating}</p>
          </div>
          {clear && (
            <div
              onClick={handleDelFav}
              className="text-xl text-red-600 cursor-pointer"
            >
              <MdDelete />
            </div>
          )}
        </div>
        <h2 className="mt-2 text-lg font-bold text-gray-800">
          {data?.bookname.slice(0, 17)}...
        </h2>
        <p className="text-sm text-gray-600">{data?.authorname}</p>
        <p className="mt-1 text-md font-semibold text-gray-900">
          ${data?.price}/day
        </p>
      </div>
    </div>
  );
};

export default BookCard;
