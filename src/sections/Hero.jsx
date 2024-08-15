import { useState } from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard.jsx";

export const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative 
xl:w-2/5 flex flex-col justify-center items-start
w-full max-xl:padding-x pt-28
"
      >
        <p className="text-xl font-montserrat text-red-500">
          Notre Collection Estivalle
        </p>
        <h1
          className="mt-10 font-planquin text-8xl max-sm:text-[72px]
        max:sm:leading-[82px] 
        font-bold"
        >
          <span
            className="xl:bg-white
          xl:whitespace-nowrap
          relative z-10 pr-10
          "
          >
            Nouvelle Collection
          </span>
          <br />
          <span
            className="text-red-500 
          inline-block mt-3"
          >
            Nike{" "}
          </span>
        </h1>
        <p
          className="
        font-sans text-gray-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm
        "
        >
          Découvrez notre nouvelle collection de chaussures Nike pour l'été.
        </p>
        <Button label="Acheter" iconURL={arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div className="flex flex-col items-center" key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1
      flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-gray-200
      bg-hero
      bg-cover bg-center 
      "
      >
        <img
          src={bigShoeImg}
          alt="chaussure"
          width={610}
          height={500}
          className="object-contain realtive z-10"
        />

        <div
          className="
        flex sm:gap-6 gap-4 absolute -bottom-[5%]
        sm:left-[10%] max-sm:px-6
        "
        >
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
