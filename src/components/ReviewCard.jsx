import { star } from "../assets/icons";

export const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="client"
        className="rounded-full object-cover h-[120px] w-[120px] "
      />
      <p className="mt-6 maw-w-sm text-center info-text">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="etoiles"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-gray-400">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin
      text-3xl text-center font-bold
      ">{customerName}</h3>
    </div>
  );
};
