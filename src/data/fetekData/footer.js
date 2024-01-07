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
          to: "#services-section",
        },
        {
          name: "Mobile application development",
          to: "#services-section",
        },
        {
          name: "Data Engineering services",
          to: "#services-section",
        },
        {
          name: "Digital Transformation Consulting",
          to: "#services-section",
        },
        {
          name: "Talent solutions",
          to: "#services-section",
        },
      ],
    },
    {
      name: "Business Solution",
      rows: [
        {
          name: "Partnership",
          to: "contact",
        },
        {
          name: "About Project",
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
