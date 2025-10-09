import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MovieDetails() {
  const { id } = useParams();
  console.log("id url", id);
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  // Movie
  const fetchMovie = async () => {
    try {
      console.log("Inizio fetch film con ID:", id);
      const response = await fetch(`http://www.omdbapi.com/?apikey=e02ef249&i=${id}`);
      if (!response.ok) {
        console.log("Errore fetch movie:", response.status);
        return;
      }
      const data = await response.json();
      console.log(" Film caricato:", data);
      setMovie(data);
    } catch (error) {
      console.error("Errore durante il fetch del film:", error);
    }
  };

  // Comments da Strive API
  const fetchComments = async () => {
    if (!id) {
      console.log("id non valido", id);
      return;
    }
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMDk0YTZmMzAyMjAwMTUxMDgwYmIiLCJpYXQiOjE3NTk5OTU0MDEsImV4cCI6MTc2MTIwNTAwMX0.QitlCm65OeVXazgEzVBoUS9kbcynd1dIZR3tsVisy-M",
        },
      });
      if (res.ok) {
        const dataC = await res.json();
        console.log("Commenti caricati per film", id, dataC);
        setComments(dataC);
      } else {
        console.log("Errore nella fetch commenti:", res.status);
        setComments([]); // nessun commento se errore
      }
    } catch (error) {
      console.log("Errore fetch commenti", error);
      setComments([]);
    }
  };

  useEffect(() => {
    console.log("useEffect attivato con id:", id);
    fetchMovie();
    fetchComments();
  }, [id]);

  if (!movie) return <p>Caricamento in corso!</p>;

  return (
    <>
      <div className="text-white">
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Plot}</p>

        <h3>Valutazioni</h3>
        {movie.Ratings && movie.Ratings.length > 0 ? (
          <ul>
            {movie.Ratings.map((rating, index) => (
              <li key={index}>
                <strong>{rating.Source}</strong>: {rating.Value}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessuna valutazione disponibile.</p>
        )}
      </div>

      <div className="text-white">
        <h2>Commenti</h2>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment._id}>
                <strong>{comment.author}</strong>: {comment.comment} — voto: {comment.rate}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessun commento per questo film.</p>
        )}
      </div>
    </>
  );
}

export default MovieDetails;
