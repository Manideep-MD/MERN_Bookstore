import React from "react";
import book from "../../assets/freebook.jpg";

const Card = () => {
  return (
    <div className="w-[25rem] h-[60vh] border-solid border-2 rounded-md">
      <div>
        <div>
          <img src={book} className="rounded-md"/>
        </div>
        <div className="w-[25rem] h-[14vh] pl-3 flex flex-col justify-around">
          <div className="flex gap-x-3">
            <text className="font-black">Drama Book</text>
            <span className="w-[4rem] bg-pink-500 rounded-md">free</span>
          </div>
          <text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et
          </text>
          <div className="w-[23rem] flex justify-between">
            <button>$ 78</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
