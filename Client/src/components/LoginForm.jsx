import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, loginFailed, loginStart } from "../action";

const LoginForm = ({ changeForm }) => {
  const authDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleForm = () => {
    changeForm("Register");
  };

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authDetails?.loading) {
      dispatch(loginStart());
      try {
        const detail = await axios.post(
          `${process.env.REACT_APP_API_URL}/user/login`,
          details
        );
        dispatch(loginUser(detail?.data));
      } catch (err) {
        dispatch(loginFailed(err?.response?.data));
      }
    }
  };

  const handleChanges = (type, value) => {
    if (type === "email") {
      setDetails((prevValue) => ({
        ...prevValue,
        email: value,
      }));
    } else {
      setDetails((prevValue) => ({
        ...prevValue,
        password: value,
      }));
    }
  };

  return (
    <div className="">
      <p className="font-bold text-xl md:text-center md:text-2xl">Login</p>
      <p className="my-3 text-center text-sm font-semibold text-red-600 ease-in">
        {authDetails.error?.message}
      </p>
      <form className="md:mt-3 md:text-center" onSubmit={handleSubmit}>
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
          className="md:w-[80%] md:my-5 bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
          placeholder="Password"
        ></input>
        <button
          type="submit"
          className="mt-5 w-[260px] shadow-md bg-gradient-to-br from-rose-600 to-rose-500 text-white font-bold p-2 rounded-lg"
        >
          Login
        </button>
      </form>
      <p className="text-sm mt-3 text-center">
        Didn't have an account ?{" "}
        <span
          className="text-blue-900 underline cursor-pointer"
          onClick={handleForm}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
