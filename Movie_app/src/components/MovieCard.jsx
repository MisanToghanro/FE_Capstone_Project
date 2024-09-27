import { Link } from "react-router-dom";

//object destructuring to access movieDisplay from the the serch bar component
const MovieCard = ({ movie }) => {
    return (
      <div className=" max-w-sm shadow-lg shadow-blue-400 p-4  rounded-lg  bg-gray-800 ">

        <img src={movie.Poster} alt={movie.Title} className="w-full" />

        <div className="p-4">
        <h2 className="font-semibold text-2xl text-blue-500 ">{movie.Title} ({movie.Year})</h2>
        <p  className="text-xl text-blue-500 ">Release date: {movie.Year}</p>

        <Link to={`/${movie.imdbID}`} className="text-blue-400 hover:underline hover:text-blue-500">View movie details</Link>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
