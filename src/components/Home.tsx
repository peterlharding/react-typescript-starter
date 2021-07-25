import Container from "react-bootstrap/Container";
import {LoremIpsum} from 'react-lorem-ipsum';

const Home = () => {

  return (
    <Container>
      <h1>Home</h1>
      <div className="text-wrapper">
        <LoremIpsum p={5} />
      </div>
    </Container>
  );
}

export default Home;
