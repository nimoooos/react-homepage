//Use for AppRouter
import { Routes, Route } from "react-router-dom";

//react-bootstrap import
import Container from 'react-bootstrap/Container';

import './App.css';

//Component import
import Navi from './Subcomponents/Navi';
import HomeRoute from "./Components/HomeRoute";
import DiscordArbitrationRoute from "./Components/DiscordArbitrationRoute";
import LineOfSight from "./Components/LineOfSight";
import ResumeRoute from "./Components/ResumeRoute";


function App() {
  return (
    <>
      <Navi />
      <Container>
        <div className="AppRouter">
          <Routes>
            <Route path="/" element={<HomeRoute/>} />
            <Route path="/discord-arbitration" element={<DiscordArbitrationRoute/>} />
            <Route path="/line-of-sight" element={<LineOfSight/>} />
            <Route path="/projects" element={<ResumeRoute/>} />
            
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
