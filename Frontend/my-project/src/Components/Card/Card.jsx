import React from "react";
// import book from "../../assets/freebook.jpg";

const Card = ({ item }) => {
  // console.log(item,"item=========>")
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg w-[26rem] h-[32rem] border-solid border-2 rounded-md">
      <div>
        <div>
          <img
            src={item?.image}
            className="rounded-t-md w-full h-[21rem] object-cover"
            alt={item?.title}
          />
        </div>
        <div className="p-3 flex flex-col justify-around">
          {/* Title and Category */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg md:text-xl">{item?.title}</h2>
            <span className="px-2 py-1 bg-pink-500 rounded-md text-white text-xs md:text-sm">
              {item?.category}
            </span>
          </div>
          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base mb-4">
            {item?.description}
          </p>
          {/* Price and Buy Now Button */}
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$ {item?.price}</span>
            <button className="px-4 py-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
