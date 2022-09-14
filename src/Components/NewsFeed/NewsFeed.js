import React from "react";
import storyImg from "../../Assets/Images/storyImg.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import stroy1 from "../../Assets/Images/story.jpg";
import stroy2 from "../../Assets/Images/story1.jpg";
import Post from "../Post/Post";
const NewsFeed = () => {
  return (
    <div className="max-h-screen mx-auto max-w-sm md:max-w-md lg:max-w-lg">
      {/* facbook story  */}
      <div className="flex gap-4 ">
        <div
          className="bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer"
          style={{
            background: `url(${storyImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="bg-white  absolute 
                 w-full h-[70px] bottom-0 rounded-b-md"
          >
            <div className="relative ">
              <AiOutlinePlus className="absolute left-14 mt-[-6px] bg-[#166ADA] rounded-xl border border-solid white text-white " />
            </div>
            <p className="text-center text-[13px] p-5">Create Your Story</p>
          </div>
        </div>
        <div
          className="bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer flex items-end"
          style={{
            background: `url(${stroy1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-end">
            <p className=" text-white font-semibold  text-[13px] w-6 lg:w-full mb-2 px-2">
              Jhon Adom
            </p>
          </div>
        </div>
        <div
          className="bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer flex items-end"
          style={{
            background: `url(${stroy2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-end">
            <p className=" text-white font-semibold  text-[13px] w-6 lg:w-full mb-2 px-2">
              Jhon Adom
            </p>
          </div>
        </div>
        <div
          className="bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer flex items-end"
          style={{
            background: `url(${stroy1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-end">
            <p className=" text-white font-semibold  text-[13px] w-6 lg:w-full mb-2 px-2">
              Jhon Adom
            </p>
          </div>
        </div>
      </div>
      <Post />
    </div>
  );
};

export default NewsFeed;
