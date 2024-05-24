import React from "react";
import { Link } from "react-router-dom";
import './FrontCard.css';
import bookHolder from "../assets/book-holder.jpg";

const FrontCard = () => {
  return (
    <div className="flex">
      <div className="w-[50%] h-[100vh] md:hidden">
        <img
          className="w-[100%] h-[100%] object-fill"
          src={bookHolder}
          alt="book-holder"
        ></img>
      </div>
      <div className="w-[50%] md:w-[100%] h-[100vh] bg-slate-900 filter flex flex-col justify-center items-center">
        <p className="font-extrabold text-transparent text-6xl mb-3 lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl bg-clip-text bg-gradient-to-b from-zinc-300 to-white">
          Today a reader
        </p>
        <p className="font-extrabold text-transparent text-6xl mb-3 lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl bg-clip-text bg-gradient-to-b from-zinc-300 to-white">
          Tommorow a leader
        </p>
        <p className="font-extrabold text-transparent text-6xl mb-3 lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl bg-clip-text bg-gradient-to-b from-zinc-300 to-white">
          Read to succeed
        </p>
        <Link to="/books">
        <button className="custom-button">
       Get Started &rarr;
     </button>
        </Link>
      </div>
    </div>
  );
};

export default FrontCard;
