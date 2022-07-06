import { useNavigate } from "react-router-dom";

interface EndPageProps {}

const EndPage: React.FC<EndPageProps> = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>This is the end of the game!</h1>
      <button onClick={()=> navigate('/')}>Return to Home</button>
    </>
  );
};

export default EndPage;
