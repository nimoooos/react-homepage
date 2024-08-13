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
import Ttrpg from "./Components/Ttrpg";
import Beacon from "./Components/Ttrpg/Beacon";

function App() {
  return (
    <>
      <Navi />
      <Container>
        <div className="AppRouter">
          <Routes>
            <Route path="/" element={<ResumeRoute/>} />
            {/* <Route path="discord-arbitration" element={<DiscordArbitrationRoute/>} /> */}
            {/* <Route path="line-of-sight" element={<LineOfSight/>} /> */}
            <Route path="projects" element={<ResumeRoute/>} />
            {/* <Route path="ttrpg" element={<Ttrpg/>} > */}
              {/* <Route path="beacon" element={<Beacon/>} /> */}
            {/* </Route> */}
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
