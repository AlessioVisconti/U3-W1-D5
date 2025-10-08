import { Container } from "react-bootstrap";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <Container fluid className="px-5">
      <Gallery fetchUrl="http://www.omdbapi.com/?s=Shrek&apikey=4a437f2c" titolo="Animazione" />
      <Gallery fetchUrl="http://www.omdbapi.com/?s=Harry Potter&apikey=4a437f2c" titolo="Avventura" />
      <Gallery fetchUrl="http://www.omdbapi.com/?s=Spider-Man&apikey=4a437f2c" titolo="Azione" />
    </Container>
  );
}

export default Home;
