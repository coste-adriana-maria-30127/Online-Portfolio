import Card from "./Card";

const ProjectCard = ({ id, srcImg, altImg }) => {
  return (
    <Card id={id}>
      <img
        src={srcImg}
        alt={altImg}
        className="rounded-md duration-200 object-cover w-full h-3/4"
      />

      <div className="flex items-center justify-center ">
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
          Link
        </button>

        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
          Code
        </button>
      </div>
    </Card>
  );
};

export default ProjectCard;
