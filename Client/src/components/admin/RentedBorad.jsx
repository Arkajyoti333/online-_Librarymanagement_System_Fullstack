import React, { useEffect, useState } from "react";
import axios from "axios";

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
  "Returned Status",
  "Change Status",
];

const RentedBorad = () => {
  const [rentalData, setRentalData] = useState([]);

  const getRentalsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books/rentals/all`
      );
      setRentalData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRentalsData();
  }, []);

  const handleStatus = async (value) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_UR}/books/returned/update`,//url has been changed
        {
          _id: value?._id,
          userId: value?.userId,
          bookId: value?.bookId,
        }
      );
      console.log(response);
      setRentalData((prev) => {
        return prev?.map((val) => {
          if (val?._id === value?._id) {
            val.returned = true;
            return val;
          } else {
            return val;
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[95%] min-h-max max-h-[98%] overflow-x-scroll overflow-y-scroll scrollbar">
      <table className="w-[100%] border-collapse ">
        <thead>
          <tr className="sticky bg-slate-900 z-10  top-0 left-0 right-0 border-[1px] border-slate-200 text-white">
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
          {rentalData?.map((data, idx) => {
            return (
              <tr
                style={{ opacity: data?.returned ? "0.3" : "1" }}
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
                <td className="p-3 text-center font-semibold border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.returned ? "Yes" : "No"}
                </td>
                <td className="p-3 text-center text-sm border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {!data?.returned && (
                    <button
                      onClick={() => handleStatus(data)}
                      className="w-[100%] px-2 font-semibold bg-emerald-500 p-1 rounded-md shadow-md"
                    >
                      Received
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RentedBorad;
