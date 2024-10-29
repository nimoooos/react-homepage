//Use for AppRouter
import { Routes, Route } from "react-router-dom";

//react-bootstrap import
import Container from 'react-bootstrap/Container';

import './App.css';

//Component import
import Navi from './Subcomponents/Navi';
// import HomeRoute from "./Components/HomeRoute";
import ResumeRoute from "./Components/ResumeRoute";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <>
      <Navi />
      <Container>
        <div className="AppRouter">
          <Routes>
            <Route path="/" element={<ResumeRoute/>} />
            <Route path="projects" element={<ResumeRoute/>} />
            <Route path="contacts" element={<Contacts/>} />
            {/* </Route> */}
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
