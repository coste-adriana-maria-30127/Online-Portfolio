import React from "react";
import Card from "./Card";

interface ExperienceCardProps {
  key: number;
  srcImg: string; // Change the type according to the actual type of 'srcImg'
  altImg: string; // Change the type according to the actual type of 'altImg'
  title: string; // Change the type according to the actual type of 'title'
  style?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  key,
  srcImg,
  altImg,
  title,
  style,
}) => {
  return (
    <Card key={key} className={style}>
      <div className="h-2/3 flex items-center justify-center p-2">
        <img src={srcImg} alt={altImg} />
      </div>
      <p className="mt-4">{title}</p>
    </Card>
  );
};

export default ExperienceCard;
