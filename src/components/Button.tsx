import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outlined" | "contained";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  onClick,
  className,
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out overflow-hidden group";

  const containedStyles =
    "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:opacity-90 focus:ring-blue-500";

  const outlinedStyles =
    "border border-blue-600 text-white hover:bg-blue-600 hover:text-white focus:ring-blue-500";

  const rippleEffect =
    "before:absolute before:inset-0 before:rounded-full before:bg-blue-800 before:opacity-0 before:scale-0 before:transition-transform before:duration-500 before:ease-in-out group-hover:before:opacity-20 group-hover:before:scale-[4]";

  return (
    <button
      className={classNames(
        baseStyles,
        variant === "contained" ? containedStyles : outlinedStyles,
        rippleEffect,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
