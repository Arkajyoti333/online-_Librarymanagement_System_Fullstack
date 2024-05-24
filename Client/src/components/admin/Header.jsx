import React, { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import axios from "axios";

const Header = () => {
  const [reqData, setReqData] = useState([]);
  const [showNoti, setShowNoti] = useState(false);

  const getRequestsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books/request/all`
      );
      setReqData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequestsData();
  }, []);

  return (
    <div className="fixed top-0 z-30 right-0 left-0 w-[100%] h-[50px] flex justify-between items-center pl-10 sm:pl-5 sm:pr-8 pr-20 py-10 md:py-7 border-b-[1px] border-b-slate-600 shadow-xl bg-slate-900">
      <p className="font-extrabold text-4xl md:text-3xl text-white sm:text-lg hover:text-orange-400">
      BookzZ.Com <span className="text-lg text-slate-300">( Dashboard )</span>
      </p>

      <div
        onClick={() => setShowNoti(!showNoti)}
        className="text-white relative text-2xl sm:text-lg cursor-pointer"
      >
        {reqData?.length > 0 && (
          <p className="absolute bg-pink-700 text-sm w-[20px] h-[20px] text-center -right-2 -top-2 rounded-full">
            {reqData?.length}
          </p>
        )}
        <FaRegBell />
      </div>

      {showNoti && (
        <div className="absolute right-20 top-16 w-[250px] h-max bg-orange-500 rounded-md p-2 text-center">
          <p className="text-white">
            <span className="font-extrabold">{reqData?.length}</span> Book
            request received !
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
