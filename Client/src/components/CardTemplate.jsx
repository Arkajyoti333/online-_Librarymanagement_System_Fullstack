import React from "react";

const CardTemplate = ({ origin }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {arr.map((data, idx) => {
        return (
          <div
            style={{ marginTop: origin ? "30px" : "0px" }}
            className="mx-2 md:mx-1 p-[1px]"
            key={idx}
          >
            <div className="w-[200px] sm:w-[150px] h-[300px] sm:h-[200px] bg-slate-900 rounded-sm">
              <div className="w-[100%] h-[70%] bg-slate-800"></div>
              <div className="w-[40px] h-[16px] bg-slate-800 mt-1 ml-[1px] rounded-sm"></div>
              <div className="mt-1 w-[150px] h-[16px] bg-slate-800"></div>
              <div className="mt-1 w-[150px] h-[16px] bg-slate-800"></div>
              <div className="w-[40px] h-[16px] bg-slate-800 mt-1 ml-[1px] rounded-sm"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardTemplate;
