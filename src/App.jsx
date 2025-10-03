import { Container } from "react-bootstrap";
import "./App.css";
import Gallery from "./components/Gallery";
import NavNet from "./components/NavNet";
import FooterNet from "./components/FooterNet";

function App() {
  return (
    <>
      <NavNet />
      <Container fluid className="px-5">
        <Gallery fetchUrl="http://www.omdbapi.com/?s=Shrek&apikey=4a437f2c" titolo="Animazione" />
        <Gallery fetchUrl="http://www.omdbapi.com/?s=Harry Potter&apikey=4a437f2c" titolo="Avventura" />
        <Gallery fetchUrl="http://www.omdbapi.com/?s=Spider-Man&apikey=4a437f2c" titolo="Azione" />
      </Container>
      <FooterNet />
    </>
  );
}

export default App;
