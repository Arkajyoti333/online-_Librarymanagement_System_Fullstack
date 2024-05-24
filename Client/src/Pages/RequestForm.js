import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetBookForm from "../components/GetBookForm";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import formImg from "../assets/form-image.svg";

const RequestForm = () => {
  const location = useLocation();
  const bookId = location.pathname.slice(14);
  const [info, setInfo] = useState();
  useEffect(() => {
    const getBookDetail = async () => {
      try {
        const bookDetail = await axios.get(
          `${process.env.REACT_APP_API_URL}/books/${bookId}`
        );
        setInfo(bookDetail);
      } catch (err) {
        console.log(err);
      }
    };
    getBookDetail();
  }, []);
  return (
    <>
      <Header />
      <div className="w[100%] h-[100%] flex md:flex-col-reverse justify-start items-center bg-gradient-to-b from-gray-800 to-gray-700 pt-[130px] md:pl-5 sm:pl-0 md:pt-[80px] pb-20">
        <GetBookForm defaultDetail={info?.data} />
        <div className="w-[450px] h-[450px] sm:w-[100%] sm:h-[250px] ml-40 md:ml-0">
          <img
            className="w-[100%] h-[100%] object-fill"
            src={formImg}
            alt="form"
          ></img>
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default RequestForm;
