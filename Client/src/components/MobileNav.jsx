import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { BsFillStarFill, BsPersonFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../action";

const MobileNav = ({ status }) => {
  const toggleStatus = useSelector((state) => state.toggler);
  const dispatch = useDispatch();
  const icons = [
    { name: "books", iconName: <AiFillHome /> },
    { name: "search", iconName: <IoSearch /> },
    { name: "favourite", iconName: <BsFillStarFill /> },
    { name: "profile", iconName: <BsPersonFill /> },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const handlePages = (val) => {
    if (val === "profile") {
      toggleStatus ? dispatch(close()) : dispatch(open());
    } else {
      navigate(`/${val}`);
    }
  };

  return (
    <div className="fixed md:flex z-20 justify-around items-center bottom-2 left-2 right-2 bg-gradient-to-br from-slate-900 to-slate-700 p-3 rounded-xl hidden">
      {icons.map((icon, idx) => {
        return (
          <div
            style={{
              background: location.pathname === `/${icon.name}` && "#64748b",
            }}
            onClick={() => handlePages(icon.name)}
            key={idx}
            className="text-white text-2xl z-10 cursor-pointer py-1 px-2 rounded-lg"
          >
            {icon.iconName}
          </div>
        );
      })}
    </div>
  );
};

export default MobileNav;
