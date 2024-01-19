import React, { useState } from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-48 sm:h-72 md:h-64 xl:h-48">
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full flex">
        {images.map((image, index) => {
          return (
            <img
              src={image.src}
              alt={image.alt}
              className={`absolute top-0 left-0 block w-full h-full object-cover transition-opacity duration-300 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center text-gray-500 px-1 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
