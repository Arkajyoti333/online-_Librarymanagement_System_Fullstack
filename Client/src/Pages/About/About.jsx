import React from "react";
import Team from "./Team";

const About = () => {
  return (
    <>
      <div className="  m-1 flex flex-wrap py-16 bg-white mt-[75px]">
        <div className=" flex flex- flex-row  mx-3 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="  m-1  flex flex-row gap-6 ">
            <div className=" m-1 flex-shrink-0 ">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="profile"
              />
            </div>
            <div className="  m-1 flex-grow ">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                React development is carried out by passionate developers
              </h2>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div> 
        <div className=" flex flex-wrap justify-evenly min-w-full  p-6 mx-4 my-0  h-auto">
           
            <Team />
            
         
        </div>
      </div>
    </>
  );
};

export default About;
