import { TOTAL_SCREEN } from "./commonutilties";
import { BehaviorSubject, Subject } from "rxjs";

export default class Scroolservice {
  static scroolHandler = new Scroolservice();

  static currentScreenBroadcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
  scroolToHireMe = () => {
    let ccontactMeScreen = document.getElementById("Contact Me");
    if (!ccontactMeScreen) return;
    ccontactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scroolToHireMe = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;
    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completlyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completlyVisible;
      default:
        return false;
    }
  };
  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREEN) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let Fullyvisible = this.isElementInView(screenFromDOM, "complete");
      let PartiallyVisible = this.isElementInView(screenFromDOM, "partial");
      if (Fullyvisible || PartiallyVisible) {
        if (PartiallyVisible & !screen.alreadyRendered) {
          Scroolservice.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (Fullyvisible) {
          Scroolservice.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
