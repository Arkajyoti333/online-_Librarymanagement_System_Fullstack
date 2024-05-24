import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequestedBooks, open } from "../action";

function convertor(date) {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
}

function getNoOfDays(start, end) {
  return Math.round(Math.abs(start - end) / (24 * 60 * 60 * 1000));
}

const GetBookForm = ({ defaultDetail }) => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState();
  const [min1, setMin1] = useState("");
  const [min2, setMin2] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [request, setRequest] = useState({
    bool: false,
    condt: "",
  });

  useEffect(() => {
    setMin1(convertor(new Date()));
  }, []);

  const handleDateChange = (e) => {
    setMin2(e.target.value);
    setStartDate(e.target.value);
  };

  useEffect(() => {
    setAmount(
      getNoOfDays(new Date(startDate), new Date(endDate)) * defaultDetail?.price
    );
    // eslint-disable-next-line
  }, [endDate]);

  const updateExtras = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${userInfo?.user?.id}`
      );
      dispatch(addRequestedBooks(response?.data?.requestedBooks));
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (userInfo?.user) {
        const bookInfos = {
          userId: userInfo?.user?.id,
          bookId: defaultDetail?._id,
          bookname: defaultDetail?.bookname,
          authorname: defaultDetail?.authorname,
          genre: defaultDetail?.type,
          from_date: e.target[4]?.value,
          to_date: e.target[5]?.value,
          amount: Number(e.target[6]?.value),
        };

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/books/request`,
          bookInfos
        );

        if (response?.data?.status === "Success") {
          setRequest({
            bool: true,
            condt: "Sent",
          });
          updateExtras(); // updated the requested books in UI too..
          setTimeout(() => setRequest({ bool: false, condt: "" }), 4000);
        }
        if (response?.data?.status === "Failure") {
          setRequest({
            bool: true,
            condt: "Not Sent",
          });
          setTimeout(() => setRequest({ bool: false, condt: "" }), 4000);
        }
      } else {
        dispatch(open());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ml-64 md:ml-5 sm:ml-0 sm:mt-7 sm:w-[100%]">
      {request?.bool && (
        <div className="absolute left-[42%] shadow-gray-700 shadow-lg rounded-lg ease-in duration-150 text-white mt-5 bg-emerald-600 py-2 px-3 font-semibold text-lg">
          {request?.condt === "Sent" ? (
            <p>Request sent successfully !</p>
          ) : (
            <p>Already Requested !</p>
          )}
        </div>
      )}
      <p className="text-5xl md:text-4xl sm:text-2xl font-bold text-white sm:text-center">
        Request Form
      </p>
      <form
        onSubmit={handleForm}
        className="flex justify-center items-start sm:items-center flex-col mt-5 sm:w-[100%]"
      >
        <input
          className="bg-slate-500 px-4 py-3 w-[400px] sm:w-[90%] mb-3 text-white rounded-2xl outline-none"
          type="text"
          placeholder="Enter Book Id"
          defaultValue={defaultDetail?._id}
          readOnly
        ></input>
        <input
          className="bg-slate-500 px-4 py-3 w-[400px] sm:w-[90%] mb-3 text-white rounded-2xl outline-none"
          type="text"
          placeholder="Book Name"
          defaultValue={defaultDetail?.bookname}
          readOnly
        ></input>
        <input
          className="bg-slate-500 px-4 py-3 w-[400px] sm:w-[90%] mb-3 text-white rounded-2xl outline-none"
          type="text"
          placeholder="Author Name"
          defaultValue={defaultDetail?.authorname}
          readOnly
        ></input>
        <input
          className="bg-slate-500 px-4 py-3 w-[400px] sm:w-[90%] mb-3 text-white rounded-2xl outline-none"
          type="text"
          placeholder="Genre"
          defaultValue={defaultDetail?.type}
          readOnly
        ></input>
        <div className="flex justify-between items-center w-[400px] sm:w-[90%] mb-3">
          <div className="flex flex-col justify-center items-start">
            <label htmlFor="from" className="text-white font-semibold">
              From *
            </label>
            <input
              onChange={handleDateChange}
              id="from"
              className="bg-slate-500 px-4 py-3 sm:text-sm mt-1 w-[180px] sm:w-[160px] mb-3 text-white rounded-2xl outline-none"
              type="date"
              required
              min={min1}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">To *</label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-slate-500 sm:text-sm px-4 py-3 mt-1 w-[180px] sm:w-[160px] mb-3 text-white rounded-2xl outline-none"
              type="date"
              required
              min={min2}
            ></input>
          </div>
        </div>
        <div className="relative">
          <p className="absolute font-semibold text-white top-3 left-5">₹</p>
          <input
            className="bg-slate-500 px-10 py-3 w-[400px] sm:w-[90%] mb-3 text-white rounded-2xl outline-none"
            type="number"
            placeholder="Amount"
            value={amount ? amount : defaultDetail?.price}
            readOnly
          ></input>
        </div>
        <button
          type="submit"
          className="w-[400px] sm:w-[90%] bg-pink-700 p-3 mt-3 text-white font-semibold rounded-xl text-lg"
        >
          Request the Book
        </button>
      </form>
    </div>
  );
};

export default GetBookForm;
