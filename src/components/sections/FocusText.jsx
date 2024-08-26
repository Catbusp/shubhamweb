import React from "react";
import Slider from "react-slick";

export default function FocusText() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };
  return (
    <div className="focuswindow">

    <Slider {...settings} className="windowtext">
      <div className="text-center">
        <h3>Shares</h3>
      </div>
      <div className="text-center">
        <h3>Paid Ads</h3>
      </div>
      <div className="text-center">
        <h3>Likes</h3>
      </div>
      <div className="text-center">
        <h3>Repost</h3>
      </div>
      <div className="text-center">
        <h3>Shares</h3>
      </div>
      <div className="text-center">
        <h3>Traffic</h3>
      </div>
      <div className="text-center">
        <h3>Videos</h3>
      </div>
      <div className="text-center">
        <h3>Impacts</h3>
      </div>
      <div className="text-center">
        <h3>Clicks</h3>
      </div>
      <div className="text-center">
        <h3>Produce</h3>
      </div>
    </Slider>

    <div className="glass_overlay">
        <div className="row blur_box">
            <div className="col-lg-5">

            </div>

            <div className="col-lg-2">
              
            </div>

            <div className="col-lg-5">
              
            </div>
        </div>
    </div>

    </div>
  );
}