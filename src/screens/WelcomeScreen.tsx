import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.styles.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const WelcomeScreen: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="screen-wrapper">
      <div className="img-wrapper">
        <Logo />
        {/* <img src={logo} className="app-logo" alt="the Name Game logo" /> */}
      </div>
      <div className="bottom-content">
        <h3 className="cta-text">
          Try matching the WillowTree employee to their photo
        </h3>
        <button className="play-button" onClick={() => navigate("/play")}>
          Play!
        </button>
      </div>
    </div>
  );
};
