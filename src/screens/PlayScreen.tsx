import { useNavigate } from "react-router-dom"
import { useData } from "../api/useData";
import { ReactComponent as Title } from '../assets/title.svg';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import './PlayScreen.styles.css';
import GameWrapper from "../components/GameWrapper";

export const PlayScreen: React.FC = () => {
  const navigate = useNavigate();
  const cards = useData('https://namegame.willowtreeapps.com/api/v1.0/profiles');
  console.log(cards)

  return (
    <>
      <header className="app-header">
        <button className="back-button" onClick={(() => navigate(-1))}>
          <Arrow />
        </button>
        <div className="title-wrapper">
          <Title />
        </div>
      </header>
      <GameWrapper />
    </>
  )
}