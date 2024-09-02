import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  {id: 1,  value: "1k+", label: "Brands" },
  {id: 2,  value: "500+", label: "Shops" },
  {id: 3,  value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "200 €",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "150 €",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "210 €",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "230 €",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Livraison gratuite",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Products",
    links: [
      { id: 1, name: "Air Force 1", link: "/" },
      { id: 2, name: "Air Max 1", link: "/" },
      { id: 3, name: "Air Jordan 1", link: "/" },
      { id: 4, name: "Air Force 2", link: "/" },
      { id: 5, name: "Nike Waffle Racer", link: "/" },
      { id: 6, name: "Nike Cortez", link: "/" },
    ],
  },
  {id: 2,
    title: "Help",
    links: [
        { id: 7, name: "About us", link: "/" },
            { id: 8, name: "FAQs", link: "/" },
            { id: 9, name: "How it works", link: "/" },
            { id: 10, name: "Privacy policy", link: "/" },
            { id: 11, name: "Payment policy", link: "/" },
    ],
  },
  {id: 3,
    title: "Get in touch",
    links: [
        { id: 12, name: "customer@nike.com", link: "mailto:customer@nike.com" }, // Ajout d'un identifiant unique pour chaque lien
        { id: 13, name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { id: 1, src: facebook, alt: "facebook logo" },
  { id: 2, src: twitter, alt: "twitter logo" },
  { id: 3, src: instagram, alt: "instagram logo" },
];
