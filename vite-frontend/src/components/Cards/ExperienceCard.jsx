import Card from "./Card";

const ExperienceCard = ({ id, srcImg, altImg, title, style }) => {
  return (
    <Card id={id} className={style}>
      <div className="h-2/3 flex items-center justify-center p-2">
        <img src={srcImg} alt={altImg} />
      </div>

      <p className="mt-4">{title}</p>
    </Card>
  );
};

export default ExperienceCard;
