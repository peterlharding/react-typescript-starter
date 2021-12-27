
import {Route, Routes} from "react-router-dom";

import Container from "react-bootstrap/Container";

import {NavBar, Footer, About, Home} from "../components";

import './App.css';

function App() {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
        <Container className="flex-grow-1 mt-5">
        <Routes>
          <Route path="/"                   element={<Home/>} />
          <Route path="/home"               element={<Home/>} />
          <Route path="/about"              element={<About/>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
