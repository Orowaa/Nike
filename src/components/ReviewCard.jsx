export const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="client"
        className="rounded-full object-cover h-[120px] w-[120px] "
      />
      ReviewCard
    </div>
  );
};
