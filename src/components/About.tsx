import Container from "react-bootstrap/Container";
import {LoremIpsum} from 'react-lorem-ipsum';

const About = () => {

  return (
    <Container>
      <h1>About</h1>
      <div className="text-wrapper">
        <LoremIpsum p={5} />
      </div>
    </Container>
  );
}

export default About;
