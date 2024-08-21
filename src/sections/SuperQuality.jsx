import { Button } from "../components/Button";
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";

export const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-planquin text-4xl capitalize gap-4 font-bold lg:max-w-lg">
          Découvrez Nos Superbes
          <span className="text-red-500 inline-block mt-3">Sneakers</span>
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
        <div className="mt-11 ">
          <Button label="Acheter" 
          iconURL={arrowRight}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
