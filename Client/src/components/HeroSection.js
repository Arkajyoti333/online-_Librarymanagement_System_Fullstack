import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
     
    const navigate = useNavigate();
  const location = useLocation();
   
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
       
    <div className="relative w-[90%]  mr-auto  ml-0 rounded-3xl overflow-hidden mt-[5px] pt-1 ">
      <Slider {...carouselSettings}>
        <div >
          <img
            src="https://images.pexels.com/photos/248515/pexels-photo-248515.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="card 1"
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="card "
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-man-coding-on-computers-sitting-at-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="card "
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/279222/pexels-photo-279222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="card "
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="card "
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/15068406/pexels-photo-15068406/free-photo-of-books-on-a-flea-market-stall.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="card "
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Bookzz Is Online</h1>
        <p className="text-lg">Keep Learning Keep Exploring...</p>
        {/* Search Bar */}
        <div className="flex items-center pt-3">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-md"
          />
             {location.pathname !== "/search" && (
          <button  
          onClick={() => navigate("/search")}
          className="ml-2 bg-green-100 text-black px-4 py-3 rounded-md hover:bg-sky-400">
            <IoSearch />
           
          </button>
          
          )}
        </div>
      </div>
            
    </div>
    
    </>
  );
};

export default Hero;
