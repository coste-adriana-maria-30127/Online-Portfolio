import Facebook from "../../assets/portfolio/Facebook.jpeg";
import Instagram from "../../assets/portfolio/Instagram.jpg";
import Youtube from "../../assets/portfolio/Youtube.jpg";
import Twitter from "../../assets/portfolio/Twitter.jpg";
import TripAdvisor from "../../assets/portfolio/TripAdvisor.jpg";
import LinkedIn from "../../assets/portfolio/LinkedIn.jpg";
import ProjectCard from "../Cards/ProjectCard";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Facebook,
      alt: "Facebook",
    },
    {
      id: 2,
      src: Instagram,
      alt: "Instagram",
    },
    {
      id: 3,
      src: Youtube,
      alt: "Youtube",
    },
    {
      id: 4,
      src: Twitter,
      alt: "Twitter",
    },
    {
      id: 5,
      src: TripAdvisor,
      alt: "TripAdvisor",
    },
    {
      id: 6,
      src: LinkedIn,
      alt: "LinkedIn",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-white to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-gray-800">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800 ">
            Portfolio
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, alt }) => (
            <ProjectCard key={id} srcImg={src} altImg={alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
