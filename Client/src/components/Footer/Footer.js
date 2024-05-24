import React from "react";
// import { BroderLine } from "../BookRecommendation/Booksrecommendation";

const BroderLine=()=>{
    return(
    <div className="w-40 h-1 border-b-4 border-white-400 mt-2 rounded-2xl md:mt-4 mb-12">  
    </div>
    )
  } 

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap bg-slate-900 justify-between flex-row md:flex-row w-full text-white px-4 pt-6 pb-3 ">
        <div className="shadow-sm  my-3">
          <img
            className="w-32 h-16 rounded-sm "
            src="https://images.pexels.com/photos/7661331/pexels-photo-7661331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <a href="arkajyotikundu415@gmail.com">
            <p className="my-4">Email us: SassStart369@.edu.com</p>
          </a>
        </div>

        <div className="p-1">
          <h2 className=" font-bold text-xl mt-3">Bookzz</h2>

          <div className=" bg-yellow-400 w-[70px] h-1 overflow-hidden rounded-md my-3">
            <BroderLine />
          </div>
          <div>
             <a href="###"><p className ="hover:underline">About us</p></a>
             <a href="###"><p className ="hover:underline">Blog</p></a>
             <a href="###"><p className ="hover:underline">FAQ</p></a>
             <a href="###"><p className ="hover:underline">Privacy policy</p></a>
          </div>
        </div>
        <div className="p-1">
          <h2 className=" font-bold text-xl mt-3">HELP CENTER</h2>

          <div className=" bg-yellow-400 w-[130px] h-1 overflow-hidden rounded-md my-3">
            <BroderLine />
          </div>
          <div>
            <a href="###"><p className ="hover:underline">Discord Server</p></a>
            <a href="###"><p className ="hover:underline">Twitter</p></a>
            <a href="###"><p className ="hover:underline">Facebook</p></a>
            <a href="###"><p className ="hover:underline">Contact Us</p></a>
          </div>
        </div>
        <div className="p-1">
          <h2 className=" font-bold text-xl mt-3">DOWNLOAD</h2>

          <div className=" bg-yellow-400 w-[120px] h-1 overflow-hidden rounded-md my-3">
            <BroderLine />
          </div>
          <div>
             <a href="###"><p className ="hover:underline">iOS</p></a>
             <a href="###"><p className ="hover:underline">Android</p></a>
             <a href="###"><p className ="hover:underline">Windows</p></a>
          </div>
        </div>
      </footer>
      <div className="flex flex-wrap min-w-full justify-center items-center  ">
      <div className="flex flex-wrap min-w-full justify-center items-center h-auto overflow-hidden">
      <hr className ="my-0 border-b-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-0" />
      <span className ="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="####" className ="hover:underline">
          Bookzz™
        </a>
        . All Rights Reserved.
      </span>

      </div>
      </div>
     
    </>
  );
};

export default Footer;
