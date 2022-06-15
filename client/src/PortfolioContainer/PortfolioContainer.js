import React from "react";
import { TOTAL_SCREEN } from "../utilities/commonutilties";
export default function PortfolioContainer() {
  const MapAllScreen = () => {
    return TOTAL_SCREEN.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };
  return <div className="portfolio-container">{MapAllScreen()}</div>;
}
