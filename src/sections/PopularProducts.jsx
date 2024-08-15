import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

export const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div
        className="
    flex flex-col justify-start gap-5
    "
      >
        <h2
          className="text-4xl
font-palanquin font-bold
"
        >
          Nos Produits <span className="text-red-400">Populaires</span>
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat text-gray-400">
          Découvrez les chaussures les plus populaires de la semaine qui allient
          qualité,confort et technologie.
        </p>
      </div>

      <div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
grid-cols-1 sm:gap-5 gap-14"
      >
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
        ;
      </div>
    </section>
  );
};
