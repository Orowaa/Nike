export const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullwidth
}) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${borderColor}` : "bg-red-500 text-white border-red-500"} rounded-full ${fullwidth ? 'w-full' : ''}`}
  >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-2 h-2 "
        />
      )}
    </button>
  );
};

