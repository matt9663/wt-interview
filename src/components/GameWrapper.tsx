import { useState } from "react";
import EndPage from "./EndPage";
import GamePage from "./GamePage";

interface GameWrapperProps {
  
}
 
const GameWrapper: React.FC<GameWrapperProps> = () => {
  const [roundCounter, setRoundCounter] = useState<number>(1);
  const isFinished = roundCounter > 5;
  if (isFinished) return <EndPage />;
  return ( 
    <GamePage />
   );
}
 
export default GameWrapper;