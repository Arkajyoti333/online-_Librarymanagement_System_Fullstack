import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

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
          <div className="flex items-center bg-gradient-to-r from-orange-600 to-orange-300 px-2 py-1 rounded-md">
         
            <p className="pt-1 font-semibold text-xl">*</p>
            <p className="ml-1 p-1 text-slate-800 font-semibold">{data?.rating}</p>
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
