import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PlayScreen } from './screens/PlayScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

function App() {
  
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
