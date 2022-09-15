import heroImg from "~image/custom/hero.png";
import IdeaImg from "~image/custom/working-remotely.png";
import clientAvatar from "~image/custom/client-avatar.png";
import logo from "~image/logo/fetek.svg";
import UnderstandingCustomers from "~image/services/understanding-customers.png";

const Images = {
  home: {
    hero: heroImg,
    idea: IdeaImg,
    testiomonials: [
      {
        name: "Paulus Haverinen",
        avatar: clientAvatar,
      },
    ],
  },
  footer: {
    logo: logo,
  },
};

export default Images;
