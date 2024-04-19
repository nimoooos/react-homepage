//Use for AppRouter
import { Routes, Route } from "react-router-dom"

//react-bootstrap import
import Container from 'react-bootstrap/Container';

import './App.css';

//Component import
import Navi from './Subcomponents/Navi';
import HomeRoute from "./Components/HomeRoute";




function App() {
  return (
    <>
      <Navi />
      <Container>
        <div className="AppRouter">
          <Routes>
            <Route path="/" element={<HomeRoute/>} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
