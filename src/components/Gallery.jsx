import { Component } from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

class Gallery extends Component {
  state = {
    film: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { fetchUrl } = this.props;

    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Problema");
        return response.json();
      })
      .then((film) => {
        this.setState({ film: film.Search, loading: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const { film } = this.state;

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
    };

    return (
      <div className="slider-container">
        <h1 className="text-white">{this.props.titolo}</h1>

        <Slider {...settings}>
          {film.map((item) => (
            <Card.Img key={item.imdbID} src={item.Poster} as={Link} to={`/MovieDetails/${item.imdbID}`} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default Gallery;
//   <div>
//     <h1 className="text-white">{this.props.titolo}</h1>
//     <div className="d-flex flex-wrap gap-3">
//       {film.map((item, index) => (
//         <Card key={`${item.imdbID}-${index}`} style={{ width: "200px" }}>
//           <Card.Img variant="top" src={item.Poster} />
//           <Card.Body>
//             <Card.Title>{item.Title}</Card.Title>
//             <Card.Text>{item.Year}</Card.Text>
//           </Card.Body> servivano per aiutarmi a capire se gli id  funzionavnao o no il nome dei ti che davano problemi
//         </Card>
//       ))}
//     </div>
//   </div>
