import React from "react";
// import { FaRegBell } from "react-icons/fa";
import ProfileCard from "./ProfileCard";
// import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../action";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const toggleStatus = useSelector((state) => state.toggler);
  const dispatch = useDispatch();
  const handleToggler = () => {
    toggleStatus ? dispatch(close()) : dispatch(open());
  };

  return (
    <>
      <div className="fixed top-0 z-50 right-0 left-0 w-[100%] h-[50px] flex justify-around items-center py-10 md:py-7 border-b-[1px] border-b-slate-500 shadow-xl bg-slate-800">
        <Link to={"/"}>
          <p className="font-extrabold text-4xl md:text-3xl text-white">
            BookzZ.Com
          </p>
        </Link>
        <NavLink
            to="/books"
            className={({isActive})=>
            ` ${isActive?"text-orange-500":" text-white"}  text-xl font-bold px-0 ml-0 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
             Home
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive})=>
            ` ${isActive?"text-orange-500":" text-white"}  text-xl font-bold px-0 ml-0 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
           About us
          </NavLink>
        {/* <SearchBar /> */}
        <div className="flex text-xl justify-end items-center w-[20%] md:hidden">
       
          <NavLink
            to="/Blogs"
            className={({isActive})=>
            ` ${isActive?"text-orange-500":" text-white"}  font-bold pl-0 pr-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
             Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive})=>
            ` ${isActive?"text-orange-500":" text-white"}  font-bold px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
            Contact 
          </NavLink>
          <p
            onClick={() => navigate("/favourite")}
            className="p-1 text-lg font-semibold  ml-3 mr-10 text-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer hover:text-slate-900 "
          >
            Favourites
          </p>
          <p
            onClick={handleToggler}
            className=" p-1 text-lg font-semibold text-slate-50 cursor-pointer rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
           Login
          </p>
        </div>
      </div>
      
      <div className="">
        <ProfileCard />
      </div>
    </>
  );
};

export default Header;
