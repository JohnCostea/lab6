import Movies from "./components/Movies"
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
      .then((response) => {
        setMovies(response.data.myArray);
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