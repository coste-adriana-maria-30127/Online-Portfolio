import classnames from "classnames";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

interface ButtonProps {
  text: string;
  type: "button" | "reset" | "submit";
  variant: "primary" | "secondary" | "empty" | "plain-text" | "back";
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  hidden?: boolean;
  to?: string;
  smooth?: boolean; // Optional prop for smooth scrolling
  duration?: number; // Optional prop for smooth scrolling duration
}

export const Button = ({
  text,
  variant,
  type,
  className,
  disabled,
  handleClick,
  to,
  smooth,
  duration,
}: ButtonProps) => {
  const isLinkButton = Boolean(to);

  if (isLinkButton) {
    return (
      <Link
        to={to || ""}
        smooth={smooth || false}
        duration={duration || 0}
        className={classnames(
          "font-bold group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105",
          className
        )}
      >
        {text}
        <span className="group-hover:rotate-90 duration-300">
          <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
        </span>
      </Link>
    );
  }

  return (
    <button
      className={classnames(
        "font-bold rounded-md w-fit px-6 py-3 my-2 flex items cursor-pointer hover:scale-105",
        className,
        {
          [" text-black bg-gradient-to-r from-cyan-500 to-cyan-700"]:
            variant === "primary",
          [" text-black bg-gradient-to-r from-lime-500 to-lime-700"]:
            variant === "secondary",
        }
      )}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
