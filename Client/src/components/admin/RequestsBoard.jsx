import React, { useState, useEffect } from "react";
import axios from "axios";
import { acceptReq, declineReq } from "../../action";
import { useDispatch, useSelector } from "react-redux";

const data = [
  "S.NO",
  "User Id",
  "Book Id",
  "Book Name",
  "Author Name",
  "Genre",
  "Rent From (YYYY-MM-DD)",
  "Rent Till (YYYY-MM-DD)",
  "Amount (INR)",
  "Accept Request",
  "Decline Request",
];

const RequestsBoard = () => {
  const dispatch = useDispatch();
  const adminInfos = useSelector((state) => state.admin);
  const [reqData, setReqData] = useState([]);

  const getRequestsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books/request/all` //url changed
      );
      setReqData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequestsData();
  }, []);

  const handleAcceptance = async (userId, bookId) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/books/request/one`,
        {
          userId: userId,
          bookId: bookId,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRequest = (action, value) => {
    if (action === "accept") {
      if (!isFound(value?.userId, value?.bookId)) {
        dispatch(acceptReq([value]));
        handleAcceptance(value?.userId, value?.bookId);
      }
    } else {
      console.log("Decline");
    }
  };

  const isFound = (userId, bookId) => {
    const bool = adminInfos?.acceptedRequest?.some((obj) => {
      return obj?.userId === userId && obj?.bookId === bookId;
    });
    return bool;
  };

  return (
    <div className="w-[95%] min-h-max max-h-[98%] overflow-x-scroll overflow-y-scroll scrollbar">
      <table className="w-[100%] border-collapse ">
        <thead>
          <tr className="sticky bg-slate-800  top-0 left-0 right-0 border-[1px] border-slate-200 text-white">
            {data?.map((data, idx) => {
              return (
                <th
                  key={idx}
                  className="p-2 border-[0.5px] border-r-slate-400 min-w-fit whitespace-nowrap"
                >
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {reqData?.map((data, idx) => {
            return (
              <tr
                style={{
                  opacity: isFound(data?.userId, data?.bookId) ? "0.5" : "1",
                }}
                key={idx}
                className="bg-slate-500 text-white border-[1px] border-slate-200"
              >
                <td className="bg-fixed top-0  left-0 bottom- 0 bg-slate-900 p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {idx + 1}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.userId}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.bookId}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.bookname}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.authorname}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.genre}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.from_date}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.to_date}
                </td>
                <td className="p-3 text-center font-semibold border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.amount}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  <button
                    onClick={() => handleRequest("accept", data)}
                    className="w-[100px] font-semibold bg-emerald-500 p-1 rounded-md shadow-md"
                  >
                    ACCEPT
                  </button>
                </td>
                <td className="p-3 text-center font-semibold border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  <button className="w-[100px] bg-red-500 p-1 rounded-md shadow-md">
                    DECLINE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsBoard;
