import React, { useState, useEffect } from "react";
import {
  TOTAL_SCREEN,
  GET_TOTAL_SCREEN,
} from "../../../utilities/commonutilties";
import Scroolservice from "../../../utilities/Scroolservice";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import index from "react-typical";
export default function Header() {
  const [selectedScreen, GetSelectedScreen] = useState(0);
  const [showHeaderOptions, SetshowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screen_Index = GET_TOTAL_SCREEN(currentScreen.screenInView);
    if (screen_Index < 0) return;
  };
  let currentScreenSubscription =
    Scroolservice.currentScreenBroadcaster.subscribe(updateCurrentScreen);
  const getHeaderOptions = () => {
    return TOTAL_SCREEN.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };
  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREEN.length - 1) classes += "header-option-seperator";
    return;
  };
  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    GetSelectedScreen(index);
    SetshowHeaderOptions(false);
  };
  return (
    <div>
      <div
        className="header-container"
        onClick={() => SetshowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => SetshowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span>ABDUL QUDOOS~</span>
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}
