import Images from "./my-image";
import clientAvatar from "~image/custom/client-avatar.png";

// console.log("Images.home.testiomonials :>> ", Images.home.testiomonials);
const HomeData = {
  hero: {
    subtitle: "Get Started",
    title: "YOUR RELIABLE TECHNOLOGY PARTNER",
    // description:
    //   "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
    image: Images.home.hero,
  },
  idea: {
    subtitle: "Welcome",
    title: "YOUR RELIABLE TECHNOLOGY TEAM",
    description:
      "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to archive your goals.",
    steps: [
      {
        id: 1,
        title: "Share us your problem",
        description:
          "Our engineers will co-work with you to understand, analyze and proposal you our solutions for finishing the projects.",
      },
      {
        id: 2,
        title: "We build out our team",
        description:
          "Our lead engineer will work with you to build out your engineering dream team. All the people you’ll need to make your project a reality",
      },
      {
        id: 3,
        title: "We work the way you work",
        description:
          "We’ll act as an extension of your team. Whether you use agile, kanban, or waterfall methodology, your new team will fit in with your working style.",
      },
      {
        id: 4,
        title: "We stick around post-delivery",
        description:
          "We’re in this for the long term and we are available for post-project support and maintenance or anything else.",
      },
    ],
    image: Images.home.idea,
  },
  service: {
    subtitle: "Our Services",
    title: "We run all kinds of services in form of Technologies",
    items: [
      {
        icon: "fas fa-envelope",
        name: "Web & Mobile Development",
        description: "50 availabe vacancy",
        to: "services/web-app",

        iconBackground: "#1de2cf",
      },
      {
        icon: "fas fa-layer-group",
        name: "Design & vreatives",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#494ca2",
      },
      {
        icon: "fas fa-headphones",
        name: "AI & Machine Learning",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#0f89ff",
      },
      {
        icon: "fas fa-bell",
        name: "Data Transformation",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#60E1CB",
      },
      {
        icon: "fas fa-file-invoice",
        name: "Datalake & Lakehouse",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#0f89ff",
      },
      {
        icon: "fas fa-chart-pie",
        name: "Reporting development",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#0cd68a",
      },
    ],
  },
  about: {
    items: [
      {
        scores: "5.0",
        stars: 5,
        comment:
          "About us about us about us.",
        guest: {
          name: "Paulus Haverinen",
          position: "Owner, Ikirakenne Ltd",
          avatar: clientAvatar,
        },
      },
      {
        scores: "5.0",
        stars: 5,
        comment:
          "About us about us about us.",
        guest: {
          name: "Paulus Haverinen",
          position: "Owner, Ikirakenne Ltd",
          avatar: clientAvatar,
        },
      },
    ]
  },
  testiomonials: {
    subtitle: "Testiomonials",
    title: "Our Happy Clients",
    items: [
      {
        scores: "5.0",
        stars: 5,
        comment:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
        guest: {
          name: "Paulus Haverinen",
          position: "Owner, Ikirakenne Ltd",
          avatar: Images.home.testiomonials.find(
            (item) => item.name === "Paulus Haverinen"
          ).avatar,
        },
      },
      {
        scores: "5.0",
        stars: 5,
        comment:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
        guest: {
          name: "Paulus Haverinen",
          position: "Owner, Ikirakenne Ltd",
          avatar: Images.home.testiomonials.find(
            (item) => item.name === "Paulus Haverinen"
          ).avatar,
        },
      },
    ],
  },
  blog: {
    subtitle: "News & Articles",
    title: "Fetek Blog",
    description:
      "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
  },
};

export default HomeData;
