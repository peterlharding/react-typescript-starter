
import {Link} from "react-router-dom";

const style: any = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",
};

// ...(isCurrent && {borderBottom: '3px solid #00416d'})

const Footer = () => (
  <footer className="bg-light p-3 text-center" style={style}>
    <div className="logo" />
    <p>
      Sample project demonstrating app implemented with Typescript.
      <br />
      <Link to="/home">Home</Link>
      {" "}|{" "}
      <Link to="/about">About</Link>
      <br />
      <a target="_blank"  rel="noopener noreferrer" href="https://github.com/peterlharding/react-typescript-demo">
        React Typescript Demo
      </a>
    </p>
  </footer>
);

export default Footer;
