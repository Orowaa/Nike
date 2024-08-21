import { offer } from "../assets/images";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons/index";

export const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center max-xl:flex-col-revese gap-10
    max-container
    
    "
    >
      <div
        className="flex-1
      "
      >
        <img
          src={offer}
          alt="offre"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-planquin text-4xl capitalize font-bold lg:max-w-lg">
          Les Bonnes
          <span className="text-red-500 "> Affaires</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Offrant un confort exceptionnel et un style raffiné, nos chaussures
          soigneusement élaborées sont destinées à sublimer votre expérience,
          avec une qualité incomparable, une innovation constante, et une touche
          d'élégance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Notre engagement envers le détail et l'excellence assure votre entière
          satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Voir les détails" iconURL={arrowRight} />

          <Button
            label="En savoir plus"
            backgroundColor="bg-white"
            borderColor="border-gray-500"
            textColor="text-gray-500"
          />
        </div>
      </div>
    </section>
  );
};
