import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.slides.length - 1 : prevSlide - 1));
  };

  if (!data || !data.slides || data.slides.length === 0) {
    return <div>No slides to display</div>;
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.slides.map((slideData, idx) => (
        <div
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
          style={{ backgroundColor: slideData.background }}
        >
          <p>{slideData.text}</p>
          {slideData.button && (
            <div className="buttons">
              <a href={slideData.button.link} target="_blank" rel="noopener noreferrer">
                <button>{slideData.button.label}</button>
              </a>
            </div>
          )}
          {slideData.buttons && slideData.buttons.length > 0 && (
            <div className="buttons">
              {slideData.buttons.map((button, btnIdx) => (
                <a key={btnIdx} href={button.link} target="_blank" rel="noopener noreferrer">
                  <button>{button.label}</button>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.slides.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
