import Images from "./my-image";
import clientAvatar from "~image/custom/client-avatar.png";
import team1 from "~image/custom/team1.png";
import team2 from "~image/custom/team2.webp";

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
    subtitle: "Get Started",
    title: "YOUR RELIABLE TECHNOLOGY PARTNER",
    description:
      "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
    steps: [
      {
        id: 1,
        title: "YOUR RELIABLE TECHNOLOGY PARTNER",
        description:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        id: 2,
        title: "YOUR RELIABLE TECHNOLOGY PARTNER",
        description:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        id: 3,
        title: "YOUR RELIABLE TECHNOLOGY PARTNER",
        description:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
      },
      {
        id: 4,
        title: "YOUR RELIABLE TECHNOLOGY PARTNER",
        description:
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
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
        name: "Product Management",
        description: "50 availabe vacancy",
        to: "services/web-app",

        iconBackground: "#1de2cf",
      },
      {
        icon: "fas fa-layer-group",
        name: "Web & Mobile Development",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#494ca2",
      },
      {
        icon: "fas fa-headphones",
        name: "Customer Support",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#0f89ff",
      },
      {
        icon: "fas fa-bell",
        name: "Human Resources",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#60E1CB",
      },
      {
        icon: "fas fa-file-invoice",
        name: "Design & vreatives",
        description: "50 availabe vacancy",
        to: "services/web-app",
        iconBackground: "#0f89ff",
      },
      {
        icon: "fas fa-chart-pie",
        name: "Marketing & Commuication",
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
          "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
        guest: {
          name: "Paulus Haverinen",
          position: "Owner, Ikirakenne Ltd",
          avatar: team1,
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
          avatar: team2,
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
