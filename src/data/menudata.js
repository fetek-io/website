// import menuImage from '../assets/image/menu-image.webp'

export const menuItems = [
  {
    name: "",
    label: "Services",
    items: [
      { name: "services/web-app", label: "Web application development" },
      { name: "services/mobile-app", label: "Mobile application development" },
      { name: "services/data", label: "Data Engineering services" },
      {
        name: "services/digital",
        label: "Digital Transformation Consulting",
      },
      { name: "services/solution", label: "Talent solutions" },
    ],
  },
  {
    name: "portfolio",
    label: "Portfolio",
    isExternal: false,
  },
  {
    name: "blog",
    label: "Blog",
    isExternal: false,
  },
  {
    name: "about-us",
    label: "About",
    isExternal: false,
  },
  {
    name: "contact",
    label: "Contact",
    isExternal: false,
  },
];
export default menuItems;
