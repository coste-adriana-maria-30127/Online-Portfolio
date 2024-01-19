import React from "react";
import HeroImage from "../../assets/heroImage.png";
import { Button } from "../FormElements/Button";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="pt-48 pb-32 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I'm an ambitious team player who excels in collaborative
            environments. My strengths include empathy, open-mindedness,
            determination, and resourcefulness. I also bring creativity and
            artistic sensibility, complemented by a critical and rational
            mindset.
          </p>

          <div>
            {/* <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fix w-3 px-6 py-3 my-2 flex items-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link> */}
            <Button
              text="Go to Portfolio"
              variant="primary"
              type="button"
              to="portfolio"
              smooth
              duration={500}
              className="your-custom-styles"
            />
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-2/3 md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
