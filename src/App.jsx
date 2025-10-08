import { Container } from "react-bootstrap";
import "./App.css";
import Gallery from "./components/Gallery";
import NavNet from "./components/NavNet";
import FooterNet from "./components/FooterNet";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      {/* <Container fluid className="px-5">
        <Gallery fetchUrl="http://www.omdbapi.com/?s=Shrek&apikey=4a437f2c" titolo="Animazione" />
        <Gallery fetchUrl="http://www.omdbapi.com/?s=Harry Potter&apikey=4a437f2c" titolo="Avventura" />
        <Gallery fetchUrl="http://www.omdbapi.com/?s=Spider-Man&apikey=4a437f2c" titolo="Azione" />
        </Container> */}

      <BrowserRouter>
        <NavNet />
        <div id="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TvShows" element={<TvShows />} />
            <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          </Routes>
        </div>
        <FooterNet />
      </BrowserRouter>
    </>
  );
}

export default App;
