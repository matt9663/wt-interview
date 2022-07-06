import { useNavigate } from "react-router-dom"
import { ReactComponent as Title } from '../assets/title.svg';
import './PlayScreen.styles.css';

export const PlayScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className="app-header">
        <button className="back-button" onClick={(() => navigate(-1))}>
          {"<"}
        </button>
        <div className="title-wrapper">
          <Title />
        </div>
      </header>

    </>
  )
}