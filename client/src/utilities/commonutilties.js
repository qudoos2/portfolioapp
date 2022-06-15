import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
export const TOTAL_SCREEN = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Contact Me",
    component: ContactMe,
  },
];
export const GET_TOTAL_SCREEN = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREEN.length; i++) {
    if (TOTAL_SCREEN[i].screen_name === screen_name) return i;
  }
  return -1;
};
