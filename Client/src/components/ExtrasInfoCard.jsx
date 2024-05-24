import React, { useEffect } from "react";
import axios from "axios";
import { AiOutlineDown } from "react-icons/ai";
import blank from "../assets/blank-canva.svg";
import { useSelector, useDispatch } from "react-redux";
import { addBookInHand, addRentedHistory, addRequestedBooks } from "../action";

const ExtrasInfoCard = ({ card, book, handle, visible }) => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleVisibility = (value) => {
    handle(value);
  };

  const getExtraInfos = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/get/bookinhand/${userInfo?.user?.id}`
      );
      dispatch(addRequestedBooks(response?.data?.requestedBooks));
      dispatch(addBookInHand(response?.data?.bookInHand));
      dispatch(addRentedHistory(response?.data?.rentedHistory));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExtraInfos();
  }, []);

  return (
    <>
      <div
        onClick={() => handleVisibility(card)}
        className=" bg-gradient-to-r from-slate-600 to-slate-500 text-white font-semibold flex justify-between items-center  shadow-sm p-3 w-[100%] mt-5 rounded-md cursor-pointer"
      >
        <p>{card}</p>
        <AiOutlineDown />
      </div>
      <div
        style={{ display: visible === card ? "block" : "none" }}
        className="w-[100%] h-[100%] px-3 py-4 bg-slate-400 mt-2 rounded-md"
      >
        {book?.length > 0 ? (
          book?.map((val, idx) => {
            return (
              <p key={idx} className="border-b-[1px]  border-gray-500 py-3">
                {" "}
                {val.bookname} <br />
                <span className="text-slate-900 text-sm">
                  by {val.authorname}
                </span>
              </p>
            );
          })
        ) : (
          <>
            <img
              className="w-[150px] h-[150px] mx-auto"
              src={blank}
              alt="blank"
            ></img>
            <p className="text-center font-bold text-slate-900">
              Nothing to show!
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ExtrasInfoCard;
