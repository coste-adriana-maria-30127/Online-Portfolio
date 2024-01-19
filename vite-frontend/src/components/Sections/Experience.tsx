import React from "react";
import html from "../../assets/experience/Html.png";
import css from "../../assets/experience/css.png";
import javascript from "../../assets/experience/JavaScript.png";
import react from "../../assets/experience/React.png";
import angular from "../../assets/experience/Angular.png";
import tailwind from "../../assets/experience/Tailwind.png";
import sass from "../../assets/experience/Sass.png";
import nest from "../../assets/experience/Nest.png";
import express from "../../assets/experience/Express.png";
import mongo from "../../assets/experience/Mongo.png";
import github from "../../assets/experience/git.png";
import jira from "../../assets/experience/Jira.png";
import ExperienceCard from "../Cards/ExperienceCard";

interface TechItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  style: string;
}

const Experience: React.FC = () => {
  const tech: TechItem[] = [
    {
      id: 1,
      src: html,
      alt: "html",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      alt: "css",
      title: "CSS",
      style: "shadow-indigo-600",
    },
    {
      id: 3,
      src: javascript,
      alt: "javascript",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      alt: "react",
      title: "ReactJS",
      style: "shadow-sky-300",
    },
    {
      id: 5,
      src: angular,
      alt: "angular",
      title: "AngularJS",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: tailwind,
      alt: "tailwind",
      title: "Tailwind",
      style: "shadow-cyan-700",
    },

    {
      id: 7,
      src: sass,
      alt: "sass",
      title: "SASS",
      style: "shadow-pink-500",
    },
    {
      id: 8,
      src: nest,
      alt: "nest",
      title: "NestJS",
      style: "shadow-red-700",
    },

    {
      id: 9,
      src: mongo,
      alt: "mongo",
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: express,
      alt: "express",
      title: "ExpressJS",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: github,
      alt: "github",
      title: "GitHub",
      style: "shadow-white-500",
    },
    {
      id: 12,
      src: jira,
      alt: "jira",
      title: "Jira",
      style: "shadow-indigo-400",
    },
  ];

  return (
    <div
      id="experience" // Use a custom attribute like 'data-name'
      className="bg-gradient-to-b from-gray-800 to-black w-full py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>

          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, alt, title, style }) => (
            <ExperienceCard
              key={id}
              srcImg={src}
              altImg={alt}
              title={title}
              style={style}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
