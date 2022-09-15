import Images from "./my-image";

const footer = {
  logo: Images.footer.logo,
  description:
    "With a experienced talent team, Fetek will be a reputable technology partner to maximize the development of your business",
  sign: "© 2022 FeTek",
  fb: "#",
  tw: "#",
  insta: "#",
  linkedIn: "#",
  columns: [
    {
      name: "Work",
      rows: [
        {
          name: "Blog",
          to: "blog",
        },
        {
          name: "How We Work",
          to: "contact",
        },
        {
          name: "Testimonial",
          to: "#Testimonial",
        },
      ],
    },
    {
      name: "Services",
      rows: [
        {
          name: "Web application development",
          to: "services/web-app",
        },
        {
          name: "Mobile application development",
          to: "services/mobile-app",
        },
        {
          name: "Data Engineering services",
          to: "services/data",
        },
        {
          name: "Digital Transformation Consulting",
          to: "services/digital",
        },
        {
          name: "Talent solutions",
          to: "services/solution",
        },
      ],
    },
    {
      name: "Business Solution",
      rows: [
        {
          name: "Partnership",
          to: "#",
        },
        {
          name: "About Project",
          to: "portfolio",
        },
        {
          name: "Corporate",
          to: "#",
        },
      ],
    },
  ],
};

export default footer;
