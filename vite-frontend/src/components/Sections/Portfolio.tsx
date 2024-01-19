import React, { useState, useEffect } from "react";
import Facebook from "../../assets/portfolio/Facebook.jpeg";
import Facebook2 from "../../assets/portfolio/Facebook2.jfif";
import Facebook3 from "../../assets/portfolio/Facebook3.jfif";
import Instagram from "../../assets/portfolio/Instagram.jpg";
import Youtube from "../../assets/portfolio/Youtube.jpg";
import Twitter from "../../assets/portfolio/Twitter.jpg";
import TripAdvisor from "../../assets/portfolio/TripAdvisor.jpg";
import LinkedIn from "../../assets/portfolio/LinkedIn.jpg";
import ProjectCard from "../Cards/ProjectCard";
import { Button } from "../FormElements/Button";
import Modal from "../Modal";
import {
  AddEditProjectForm,
  AddProjectForm,
} from "../FormElements/AddEditProjectForm";
import { FormProvider, useForm } from "react-hook-form";
import { addProjectSchema as schema } from "../../utils/schemas/AddProjectSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageFile: FileList;
  customerLink: string | null;
  visible?: boolean;
}

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchedProjects, setfetchedProjects] = useState<Project[]>();
  const methods = useForm<AddProjectForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { reset } = methods;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/portfolio-entry"
        );
        setfetchedProjects(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      title: "Facebook",
      description:
        "Embark on a journey of innovation with the development of the Facebook application. As a tech enthusiast and recent graduate, the coding adventure involves creating a platform that connects individuals globally. The focus is on fostering a dynamic environment that encourages learning, collaboration, and endless possibilities in the tech world. 🚀🎓💻🌐 Let's connect and explore the endless possibilities together! 🤝",
      images: [
        { src: Facebook, alt: "Facebook Image 1" },
        { src: Facebook2, alt: "Facebook Image 2" },
      ],
    },
    {
      id: 2,
      title: "Instagram",
      description:
        "Crafting the Instagram application involves the art of visual storytelling. The development journey revolves around creating a platform where users can share moments through images. From implementing sleek design elements to optimizing for a seamless user experience, the goal is to provide a space for sharing life's snapshots. 📸",
      images: [{ src: Instagram, alt: "Instagram" }],
    },
    {
      id: 3,
      title: "Youtube",
      description:
        "In the development of the YouTube application, the focus is on bringing video content to the forefront. As a developer, the challenge lies in creating a platform that not only hosts tutorials and insights but also enhances user engagement. The development process includes features for easy navigation, content discovery, and staying up-to-date with the latest in technology. 🎥",
      images: [{ src: Youtube, alt: "Youtube" }],
    },
    {
      id: 4,
      title: "Twitter",
      description:
        "Twitter's development journey is characterized by real-time updates and concise communication. As a developer, the challenge involves optimizing for speed and responsiveness. The emphasis is on creating a platform that encourages users to share thoughts, engage in conversations, and stay connected with the latest trends in the tech landscape. 🐦",
      images: [{ src: Twitter, alt: "Twitter" }],
    },
    {
      id: 5,
      title: "TripAdvisor",
      description:
        "Developing the TripAdvisor application involves creating a platform that inspires travel and exploration. The focus is on providing users with a seamless experience for sharing travel recommendations, reviews, and insights. The development journey includes implementing features that cater to both tech-savvy adventurers and leisure travelers. ✈️🗺️",
      images: [{ src: TripAdvisor, alt: "TripAdvisor" }],
    },
    {
      id: 6,
      title: "LinkedIn",
      description:
        "The development of the LinkedIn application revolves around building a professional network. As a recent graduate and tech enthusiast, the challenge lies in creating features that facilitate networking, collaboration, and professional growth. The development process emphasizes security, professionalism, and a user-friendly interface. 👔🤝",
      images: [{ src: LinkedIn, alt: "LinkedIn" }],
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-gray-200 to-gray-800 w-full py-32 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-gray-800">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800">
            Portfolio
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-12 sm:px-0 w-full h-full">
          {portfolios.map(({ id, title, description, images }) => (
            <ProjectCard
              id={id}
              title={title}
              description={description}
              images={images}
            />
          ))}
        </div>
        <Button
          text="Add a new poroject"
          type="button"
          variant="primary"
          className="mx-auto mt-20"
          handleClick={openModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FormProvider {...methods}>
          <AddEditProjectForm />
        </FormProvider>
      </Modal>
    </div>
  );
};

export default Portfolio;
