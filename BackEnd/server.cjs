// importing express so we can make our server
const express = require('express');
// creating the app using express
const app = express()
// the port the server will run on (react app is on 3000 so using 4000 for this)
const port = 4000
// cors lets our react app talk to this server without getting blocked
const cors = require('cors');

// added "(server)" to the titles so i can tell the data is coming from the server and not the old json
const movies = [
        {
            "Title": "Avengers: Infinity War (server)",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War (server)",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z (server)",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ]

// turning on cors for every route
app.use(cors());

// body parser lets us read the data that gets sent in a POST request (req.body)
const bodyParser = require('body-parser');
// this one is for form data
app.use(bodyParser.urlencoded({ extended: true }));
// this one is for json data (which is what axios sends)
app.use(bodyParser.json());

// setting the cors headers manually too, just to be safe
// allows any website to access it and allows these methods and headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next() moves on to the next bit of code, otherwise the request would just get stuck here
    next();
});

// POST route - this runs when the create page sends a new movie to the server
app.post('/api/movies', (req, res)=>{
    // getting the title, poster and year out of the body that was sent
    const title = req.body.title;
    const poster = req.body.poster;
    const year = req.body.year;

    // making a new movie object in the same format as the other movies in the array
    const newMovie = {
        Title: title,
        Year: year,
        Type: "movie",
        Poster: poster
    }

    // adding the new movie onto the end of the array
    movies.push(newMovie);
    
})


// basic route for the homepage, just to check the server is working
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// GET route that sends back all the movies as json
// the react app calls this with axios to display the movies
app.get('/api/movies', (req, res) => {

    res.json({ movies })
})

// starts the server and prints a message in the terminal so we know it's running
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
