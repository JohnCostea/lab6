// importing the Movies component which shows the list of movies
import Movies from "./components/Movies"
// useEffect is for running code when the page loads, useState is for storing the movies
import { useEffect, useState } from "react";
// axios is used to get the data from our server
import axios from "axios";

// read component - this page shows all the movies
function Read() {
  // state to hold the movies, starts off as an empty array until the data comes in
  const [movies, setMovies] = useState([]);

  // this runs once when the component first loads
  useEffect(() => {
    // sending a GET request to the server to get all the movies
    axios.get('http://localhost:4000/api/movies')
      // if it works we get the response back
      .then((response) => {
        // printing the movies to the console to check they came through
        console.log(response.data.movies);
        // saving the movies into state so they show up on the page
        setMovies(response.data.movies);
      })
      // if something goes wrong (like the server isn't running) print the error
      .catch((error) => {
        console.log(error);
      });
  // the empty [] means it only runs once and not every time the page re-renders
  }, []);

  // what gets shown on the page
  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/* passing the movies array down to the Movies component as a prop */}
      <Movies movies={movies} />
    </div>
  );
}

// exporting so it can be used in App.js
export default Read;
