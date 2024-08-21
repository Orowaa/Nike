import { reviews } from "../constants";
import { ReviewCard } from "../components/ReviewCard";

export const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Ce Que Disent Nos
        <span className="text-red-500 gap-2"> Clients </span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lisez les avis de nos clients satisfaits et découvrez pourquoi ils nous
        font confiance.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};
