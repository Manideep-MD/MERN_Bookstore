import React, { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import booksData from "../booksData/booksData.json";
import { BooksData } from "../../Api/index.jsx";

const Freebooks = () => {
  // const [data, setData] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const fetchBooks = async () => {
    try {
      const response = await BooksData();
      if (response && response.status === 200) {
        const filteredDatas = response.data.filter(
          (ele) => ele.category === "free"
        );
        setFilteredData(filteredDatas);
      } else {
        console.log("Error in fetching login details");
      }
    } catch (error) {
      console.log("Error:" + error.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col gap-[1.5rem]">
      <div>
        <h1 className="font-bold">Free Offered Courses</h1>
      </div>
      <div>
        <text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et
          totam. Tempora amet atque expedita, quae corrupti totam sed pariatur
          corporis at veniam est voluptas animi!
        </text>
      </div>
      <div>
        <Slider {...settings}>
          {filteredData &&
            filteredData.map((item) => <Card item={item} key={item.id} />)}
        </Slider>
      </div>
    </div>
  );
};

export default Freebooks;
