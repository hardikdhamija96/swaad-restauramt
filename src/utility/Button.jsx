import PropTypes from "prop-types";

const Button = ({ onClick, type, classname, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-white text-md text-red-900 border-red-900 border-[1px] rounded-lg px-4 py-3 hover:bg-red-900 hover:text-white duration-300 hover:border-white tracking-wide ${classname}`}
    >
      {children}
    </button>
  );
};

Button.prototype = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "button",
  className: "",
};

export default Button;
