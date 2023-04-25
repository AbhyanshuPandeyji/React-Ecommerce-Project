import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css";

const Slider = () => {

    // the select our slide
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        // change these images later
        "https://i.ibb.co/9tbfqpc/banner-palin.jpg",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    // to make our slider dynamic
    const prevSlide = () => {
        // if our current slide is equal to zero then go to last or if not then the image before 
        // basically if we are on the 1 index it will take us to the 0 and if we are on 2 index it will take us to 1
        setCurrentSlide(currentSlide === 0 ? data.length - 1  : (prev) => prev - 1);
    };
    const nextSlide = () => {
        // it will go in further than backwards if we are on 1 it will take us to the 2 and if on 2 take us to the 0 index
        // made it more dynamic = now data.length will be the last one and it will move around better
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
    };
    // these sliders are not very multi dimensional you cannot add more than 3 pics otherwise it will not work like to the 


    return (
        // Our Slider
        <div className="sliders">
        <div className="containers" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            {/* Different Images  */}
            {/* // this will not work this needs an component to decide its size */}
            {/* {data.for((data)=>(
                <img  src={data[data.length-1]} alt="" />
            ))} */}
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  );
};

export default Slider;
