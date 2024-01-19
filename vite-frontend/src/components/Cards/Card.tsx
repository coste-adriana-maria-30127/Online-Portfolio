import React from "react";
import classnames from "classnames";

interface CardProps {
  key: number;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ key, children, className }) => {
  return (
    <div
      key={key}
      className={classnames(
        "shadow-md shadow-gray-600 rounded-lg bg-gray-800 py-2 flex flex-col h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
