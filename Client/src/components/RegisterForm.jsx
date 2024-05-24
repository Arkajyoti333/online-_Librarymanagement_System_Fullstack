import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginFailed, loginStart } from "../action";

const RegisterForm = ({ changeForm }) => {
  const registerDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    cnfrmPassword: "",
  });
  const handleForm = () => {
    changeForm("Login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const detail = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/register`,
        {
          username: details?.username,
          email: details?.email,
          password: details?.password,
        }
      );
      dispatch(loginUser(detail?.data));
    } catch (err) {
      console.log(err);
      dispatch(loginFailed(err?.response?.data));
    }
  };

  const handleChanges = (key, value) => {
    setDetails((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };
  return (
    <div className="">
      <p className="font-bold text-xl md:text-center md:text-2xl">Register</p>
      <p className="my-3 text-center text-sm font-semibold text-red-600 ease-in">
        {registerDetails.error?.message}
      </p>
      <form className="md:mt-5 md:text-center" onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChanges("username", e.target.value)}
          required
          type="text"
          className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
          placeholder="Username.."
        ></input>
        <input
          onChange={(e) => handleChanges("email", e.target.value)}
          required
          type="email"
          className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
          placeholder="Email address.."
        ></input>
        <input
          onChange={(e) => handleChanges("password", e.target.value)}
          required
          type="password"
          className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
          placeholder="Password"
        ></input>
        <input
          onChange={(e) => handleChanges("cnfrmPassword", e.target.value)}
          required
          type="password"
          className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
          placeholder="Confirm Password"
        ></input>
        <button
          type="submit"
          className="mt-5 w-[260px] shadow-md bg-gradient-to-br from-rose-600 to-rose-500 text-white font-bold p-2 rounded-lg"
        >
          Register
        </button>
      </form>
      <p className="text-sm mt-3 text-center">
        Already have an account ?{" "}
        <span
          onClick={handleForm}
          className="text-blue-900 underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
