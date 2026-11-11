import Movies from "./components/Movies"
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data.movies);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>This is my Read Component.</h2>
      <Movies movies={movies} />
    </div>
  );
}

export default Read;