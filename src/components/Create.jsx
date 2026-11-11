// importing useState so we can store the values the user types in
import { useState } from "react";
// axios is what we use to send requests to our server
import axios from "axios";

// create component - this is the page where you can add a new movie
function Create() {
  // state for each input box, they all start off empty
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

 // this function runs when the form gets submitted
 const handleSubmit = (e) => {
  // stops the page from refreshing when you click submit (that's what forms do by default)
  e.preventDefault();
  
  // printing out what the user entered so i can check it in the console
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  
  // putting all the values into one movie object to send to the server
  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  
  // sending the movie to the server with a POST request
  // the server then adds it to the movies array
  axios.post('http://localhost:4000/api/movies', movie)
    // if it works, print what the server sent back
    .then((res) => {console.log(res.data)})
    // if something goes wrong, print the error
    .catch((err) => {console.log(err.data)});
};

  // this is what actually shows up on the page
  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* the form calls handleSubmit when the submit button is pressed */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* input for the movie title */}
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            // every time the user types, update the title state
            onChange={(e) => { setTitle(e.target.value) }}
          />
       
          {/* input for the year */}
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            // updates the year state as you type
            onChange={(e) => { setYear(e.target.value) }}
          />
               
          {/* input for the poster (this should be an image url) */}
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            // updates the poster state as you type
            onChange={(e) => { setPoster(e.target.value) }}
          />
        {/* submit button, clicking it submits the form */}
        <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
}

// exporting the component so it can be used in App.js
export default Create;
