import React from "react";
import book from "../../assets/bookWallpaper.png";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white flex flex-col md:flex-row my-[4rem]">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36x ">
        <div className="space-y-2 md:space-y-12">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et
            totam. Tempora amet atque expedita, quae corrupti totam sed pariatur
            corporis at veniam est voluptas animi!
          </p>
          <div>
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div>
            <button className="btn btn-active bg-pink-500">Secondary</button>
          </div>
        </div>
      </div>
      <div className="w-full order-1 md:w-1/2">
        <div className="md:ml-[12rem]">
          <img
            src={book}
            alt="bookwallpaper"
            className="w-[32rem] bg-white dark:bg-gray-300 dark:text-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
