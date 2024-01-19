import React from "react";
import Card from "./Card";
import Carousel from "../UIElements/Carousel";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  images: {
    src: string; // Change the type according to the actual type of 'srcImg'
    alt: string;
  }[]; // Change the type according to the actual type of 'altImg'
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  images,
}) => {
  return (
    <Card key={id}>
      <div className="w-full">
        {/* <img
          src={srcImg}
          alt={altImg}
          className="rounded-md duration-200 object-cover"
        /> */}

        <div className="w-full m-auto">
          <Carousel images={images} />
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="m-4 flex-grow">
          <p className="text-bold text-xl sm:text-2xl text-white">{title}</p>
          <p className="text-gray-400 text-sm sm:text-lg">{description}</p>
        </div>

        <div className="flex items-center justify-center">
          <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
            Link
          </button>

          <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
            Code
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
