export const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-lg bg-white
    px-10 py-16
    "
    >
      <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
        <img src={imgURL} alt={label} className="w-24 h-24 mx-auto" />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold
      
      "  >{label}</h3>
        <p className=" mt-3 break-words font-montserrat text-lg leading-normal text-gray-500
        
        "
        
        >{subtext}</p>
    </div>
  );
};
