import React, { useState, useEffect } from "react";
import ContentViewer from "../components/admin/ContentViewer";
import Header from "../components/admin/Header";
import SideBar from "../components/admin/SideBar";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const AdminPage = () => {
  const [dimension, setDimension] = useState();
  const [toggleVal, setToggleVal] = useState(false);

  useEffect(() => {
    setDimension(window.innerWidth);
  }, []);

  return (
    <>
      <Header />
      <div className="h-[100vh] flex">
        <div
          onClick={() => setToggleVal(!toggleVal)}
          className="absolute hidden sm:block top-16 right-0 bg-slate-800 text-white text-xl rounded-l-lg shadow-2xl font-extralight p-2"
        >
          {toggleVal ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        </div>
        <SideBar dimension={dimension} status={toggleVal} />
        <ContentViewer />
      </div>
    </>
  );
};

export default AdminPage;
