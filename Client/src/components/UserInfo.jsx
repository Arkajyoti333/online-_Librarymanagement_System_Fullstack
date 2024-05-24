import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ExtrasInfoCard from "./ExtrasInfoCard";
import { logout } from "../action";

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const extrasInfo = useSelector((state) => state.extras);
  const { user } = userInfo;
  const [visible, setVisible] = useState("");

  const handleVisibility = (value) => {
    if (value !== visible) {
      setVisible(value);
    } else {
      setVisible("");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    <>
      <p className="text-lg text-gray-300 font-semibold bg-pink-800 py-2 px-2 rounded-md sm:w-[100%] sm:mt-5">
        Hello, <span className="text-white">{user?.username}</span>
      </p>
      <div className="flex justify-center items-start flex-col">
        <ExtrasInfoCard
          card={"Book in Hand"}
          book={extrasInfo?.bookInHand}
          handle={handleVisibility}
          visible={visible}
        />
        <ExtrasInfoCard
          card={"Requested Books"}
          book={extrasInfo?.requestedBooks}
          handle={handleVisibility}
          visible={visible}
        />
        <ExtrasInfoCard
          card={"Rented History"}
          book={extrasInfo?.rentedHistory}
          handle={handleVisibility}
          visible={visible}
        />
      </div>
      <div className="flex flex-col justify-center items-start mt-5">
        {user?.isAdmin && (
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="p-3 w-[100%] rounded-md bg-emerald-600 text-white font-semibold text-lg shadow-sm"
          >
            View Dashboard
          </button>
        )}
        <button
          onClick={handleLogout}
          className="p-3 mt-3 w-[100%] rounded-md bg-red-500 text-white font-semibold text-lg shadow-sm"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserInfo;
