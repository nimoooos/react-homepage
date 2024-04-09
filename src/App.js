//Use for AppRouter
import { Routes, Route } from "react-router-dom"

//react-bootstrap import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//Component import
import Navi from './Subcomponents/Navi';
import CallingCard from "./Subcomponents/CallingCard";
import Todo from './Components/Todo';
import Cats from './Components/Cats';
import Dogs from "./Components/Dogs";
import Games from "./Components/Games";

import './App.css';



function App() {
  return (
    <>
      <Navi />
      <Container>
        <div className="AppRouter">
          <Routes>
            <Route path="/" element={<Todo />} />
          </Routes>
        </div>

        <Cats />
        <Dogs />
        <Games />
        <Row>
          <CallingCard id="tortuga" url="https://massif-press.itch.io/corebook-pdf-free" itemName="IPS-N Tortuga" imgSrc="https://d2c79xe1p61csc.cloudfront.net/frames/mf_tortuga.png" description="This is not a cat" />
          <CallingCard id="blackbeard" url="https://massif-press.itch.io/corebook-pdf-free" itemName="IPS-N Blackbeard" imgSrc="https://d2c79xe1p61csc.cloudfront.net/frames/mf_blackbeard.png" description="This is maybe a cat?" />
        </Row>
      </Container>
    </>
  );
}

export default App;
