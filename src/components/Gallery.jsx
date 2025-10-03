import { Component } from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Gallery extends Component {
  state = {
    film: null,
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
      slidesToShow: 3,
      speed: 500,
      arrows: true,
      dots: true,
    };

    return (
      <div>
        <h1 className="text-white">{this.props.titolo}</h1>
        <Slider {...settings}>
          {film.map((item) => (
            <Card key={item.imdbID} style={{ width: "200px" }}>
              <Card.Img variant="top" src={item.Poster} />
            </Card>
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
