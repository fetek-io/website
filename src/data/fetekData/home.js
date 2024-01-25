import Images from "./my-image";
import clientAvatar from "~image/custom/client-avatar.png";
import team1 from "~image/custom/team1.webp";

// console.log("Images.home.testiomonials :>> ", Images.home.testiomonials);
const HomeData = {
  hero: {
    subtitle: "Welcome",
    title: "YOUR RELIABLE TECHNOLOGY TEAM",
    // description:
    //   "With a talented team and a transparent working process, we are always ready to move forwards with you on the way to pursuing innovative ideas.",
    image: Images.home.hero,
  },
  idea: {
    subtitle: "Our process",
    title: "How do we work together?",
    description:
      "Evolving from a concept to a construct is an adventure, and it’s our role to guide you through this process:",
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
        description: "Elevate your business with our mobile and web development outsourcing. Our expert team crafts tailored solutions for a seamless user experience",
        to: "services/web-app",

        iconBackground: "#1de2cf",
      },
      {
        icon: "fas fa-layer-group",
        name: "Backend Development",
        description: "Our skilled team delivers tailored solutions, ensuring a robust foundation for your applications. Streamline operations and enhance performance with our expertise.",
        to: "services/web-app",
        iconBackground: "#494ca2",
      },
      {
        icon: "fas fa-headphones",
        name: "AI & Machine Learning",
        description: "Unlock business potential with our AI and machine learning outsourcing. Our experts deliver smart solutions, harnessing advanced tech for automation and innovation.",
        to: "services/web-app",
        iconBackground: "#0f89ff",
      },
      {
        icon: "fas fa-bell",
        name: "Data Transformation",
        description: "Transform your data seamlessly with our services. We specialize in efficient data transformation, unlocking insights and enhancing decision-making",
        to: "services/web-app",
        iconBackground: "#60E1CB",
      },
      {
        icon: "fas fa-file-invoice",
        name: "Datalake & Lakehouse",
        description: "Harness the power of centralized data storage, analysis, and processing for enhanced insights. Drive efficiency and innovation with our tailored data solutions",
        to: "services/web-app",
        iconBackground: "#0f89ff",
      },
      {
        icon: "fas fa-chart-pie",
        name: "Reporting development",
        description: "Providing actionable insights and enhancing data visualization. Empower your decision-making processes with our efficient reporting development.",
        to: "services/web-app",
        iconBackground: "#0cd68a",
      },
    ],
  },
  about: {
    description: 'We are a dynamic and innovative company dedicated to providing top-notch software development services tailored to meet the unique needs of our clients. With a team of highly skilled and experienced professionals, we specialize in delivering cutting-edge solutions that drive business growth and efficiency. <br className="d-block" /> <br/> Our commitment to quality, transparency, and timely delivery sets us apart. We work closely with our clients to understand their objectives, leveraging the latest technologies and industry best practices to deliver solutions that exceed expectations. From custom software development and mobile app creation to quality assurance and ongoing support, we offer a comprehensive suite of services to address all your software needs.',
    image: team1,
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
