import classnames from "classnames";

const Card = ({ id, children, className }) => {
  return (
    <div
      key={id}
      className={classnames(
        "shadow-md shadow-gray-600 rounded-lg bg-gray-800 py-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
