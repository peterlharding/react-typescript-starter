
import {Route, Switch} from "react-router-dom";

import Container from "react-bootstrap/Container";

import {NavBar, Footer, About, Home} from "../components";

import './App.css';

function App() {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
        <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/"                  exact component={Home} />
          <Route path="/home"              exact component={Home} />
          <Route path="/about"             exact component={About} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
