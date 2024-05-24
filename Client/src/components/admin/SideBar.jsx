import React from "react";
import { SideBarData } from "../../Data/SidebarData";
import { setContent } from "../../action";
import { useSelector, useDispatch } from "react-redux";

const SideBar = ({ dimension, status }) => {
  const currContent = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleContent = (val) => {
    if (currContent?.content !== val) {
      dispatch(setContent(val));
    }
  };

  return (
    <div
      style={{
        translate: dimension <= 768 ? (status ? "-100%" : "100%") : "0%",
      }}
      className="w-[20%] z-20 sm:w-[80%] ease-in-out duration-500 fixed top-0 left-0 bottom-0 pt-20 bg-gradient-to-b from-slate-700 to-slate-500 sm:-translate-x-[100%]"
    >
      {SideBarData?.map((data, idx) => {
        return (
          <div key={idx} className="px-4 py-3">
            <p className="text-lg font-bold text-white p-2 border-b-[1px] border-b-slate-300">
              {data?.title}
            </p>
            <div className="mt-3">
              {data?.subCategory?.map((list, idx) => {
                return (
                  <div
                    style={{
                      background:
                        currContent?.content === list?.name ? "#34d399" : null,
                      color:
                        currContent?.content === list?.name ? "black" : null,
                    }}
                    key={idx}
                    onClick={() => handleContent(list?.name)}
                    className="flex cursor-pointer p-2 mt-2  items-center justify-start text-white text-lg border-[1px] border-slate-400 rounded-lg"
                  >
                    {list.icon}
                    <p className="ml-2">{list.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
