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
    <div className="focuswindow mt-5">
        <h2 className="onovo-title-2 text-capitalize text-center">
            <span>We Step in Where You Need us</span>
				</h2>
    <Slider {...settings} className="windowtext">
      <div className="text-center">
        <h4>Shares</h4>
      </div>
      <div className="text-center">
        <h4>Paid Ads</h4>
      </div>
      <div className="text-center">
        <h4>Likes</h4>
      </div>
      <div className="text-center">
        <h4>Repost</h4>
      </div>
      <div className="text-center">
        <h4>Shares</h4>
      </div>
      <div className="text-center">
        <h4>Traffic</h4>
      </div>
      <div className="text-center">
        <h4>Videos</h4>
      </div>
      <div className="text-center">
        <h4>Impacts</h4>
      </div>
      <div className="text-center">
        <h4>Clicks</h4>
      </div>
      <div className="text-center">
        <h4>Produce</h4>
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