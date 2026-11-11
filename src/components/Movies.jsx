import MovieItem from "./MovieItem";

export default function Movies (props){
    return props.movies.map(
        (movie) =>{
                return <MovieItem mymovie={movie} key={movie.Title}></MovieItem>
        }
    );
}