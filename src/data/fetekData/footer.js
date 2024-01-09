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
        // {
        //   name: "Blog",
        //   to: "blog",
        // },
        {
          name: "How We Work",
          to: "process",
        },
        {
          name: "Contact Us",
          to: "contact",
        },
      ],
    },
    {
      name: "Services",
      rows: [
        {
          name: "Web & Mobile development",
          to: "#services-section",
        },
        {
          name: "Backend Development",
          to: "#services-section",
        },
        {
          name: "AI & Machine Learning",
          to: "#services-section",
        },
        {
          name: "Data Transformation",
          to: "#services-section",
        },
        {
          name: "Datalake & lakehouse",
          to: "#services-section",
        },
        {
          name: "Reporting Development",
          to: "#services-section",
        },
      ],
    },
    {
      name: "Business Solution",
      rows: [
        {
          name: "Contact us",
          to: "contact",
        },
        {
          name: "Data Solution",
          to: "portfolio",
        },
        {
          name: "IT Solution",
          to: "portfolio",
        },
        {
          name: "Corporate",
          to: "contact",
        },
      ],
    },
  ],
};

export default footer;
