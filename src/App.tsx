import { Route, Routes } from 'react-router-dom';
import { useData } from './api/useData';
import './App.css';
import { PlayScreen } from './screens/PlayScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

function App() {
  const cards = useData('https://namegame.willowtreeapps.com/api/v1.0/profiles');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeScreen />}/>
        <Route path="/play" element={<PlayScreen />} />
      </Routes>
    </div>
  );
}

export default App;
