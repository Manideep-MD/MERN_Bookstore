import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {booksData} from "../booksData/booksData";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Course = () => {
  const filteredData = booksData;
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-6 lg:px-8 md:my-[4rem]">
        {/* Hero Section */}
        <div className="mt-16 text-center flex flex-col gap-10 md:py-10">
          <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et
            totam. Tempora amet atque expedita, quae corrupti totam sed pariatur
            corporis at veniam est voluptas animi!
          </p>
          <Link to="/">
          <button className="w-[5rem] h-[3rem] text-white rounded-md text-xl bg-pink-500">Back</button>
          </Link>
        </div>

        {/* Card Section */}
        <div className="mt-10 flex flex-col md:flex-row flex-wrap justify-center gap-8 lg:gap-10">
          {filteredData &&
            filteredData.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
