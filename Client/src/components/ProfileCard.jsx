import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { AiOutlineDown } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../action";
import UserInfo from "./UserInfo";

const ProfileCard = () => {
  const togglerStatus = useSelector((state) => state.toggler);
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formName, setForm] = useState("");
  const handleForm = (val) => {
    setForm(val);
  };

  const closeToggle = () => {
    dispatch(close());
  };

  return (
    <div
      style={{
        transform: togglerStatus.status
          ? togglerStatus.dimension === "X"
            ? "translateX(0%)"
            : "translateY(0%)"
          : togglerStatus.dimension === "X"
          ? "translateX(100%)"
          : "translateY(100%)",
      }}
      className="ease-linear z-50 overflow-y-scroll pb-8 duration-200 fixed top-20 right-0 bottom-0 bg-slate-100 w-[300px] z-10 bg-gradient-to-br from-slate-300 to-slate-100 p-3 shadow-lg md:left-0 md:w-[100%] md:top-64 md:rounded-t-xl md:flex-col md:justify-center md:items-start md:pt-10 no-scrollbar"
    >
      <div
        onClick={closeToggle}
        className="hidden  md:block absolute top-0 right-0 bg-slate-500 p-3 text-white rounded-tr-lg rounded-bl-md cursor-pointer"
      >
        <AiOutlineDown />
      </div>

      {userDetails?.user ? (
        <UserInfo />
      ) : formName === "Register" ? (
        <RegisterForm changeForm={handleForm} />
      ) : (
        <LoginForm changeForm={handleForm} />
      )}
    </div>
  );
};

export default ProfileCard;
