import { useState } from "react";
import movieApi from "../ApiComponent/movieApi"; // import api for first request
import MovieCard from "./MovieCard";


const SearchBar = () => {
  const [movieInput, setMovieInput] = useState("");
  const [movieDisplay, setMovieDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(""); // clears previous errors if there were any
    setMovieDisplay([]); // displays the movies fetched from the movieapi
    setLoading(true); // when searching for movie display loading...

    if (!movieInput.trim()) {
      setError("please type in a movie name"); //if the input field is empty before searching dispaly error
      setLoading(false); //if the input field is empty do not display loading...
      return;
    }

    try {
      const response = await movieApi(movieInput);
      setMovieDisplay(response); // set moviedeisplay to what ever is fetched from the api if search is successful
    } catch (error) {
      setError("no movie found"); // if the movie isnt found display the error
    } finally {
      setLoading(false); //do not display loading... if movie is fetched
    }
  };

  

  return (
    <div >
      
      <form onSubmit={handleSearch} className="flex items-center justify-center  shadow-md shadow-blue-500  px-8 pt-6 pb-6 mb-6 ">
        <input
          type="text"
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
          placeholder=" search for a movie... "
          className="border border-gray-500 rounded-sm sm:px-4 py-1  "
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-sm ml-3 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          Search
        </button>
      </form>

      {error && <p className="text-red-500 text-center font-semibold text-2xl">{error}</p>} {/*error is displayed if movie isnt found*/}

      {loading && <p className="text-blue-500 font-semibold text-center text-2xl">Loading...</p>}
      
      {movieDisplay && (
  <div className=" m-5 mb-0   grid gap-6  md:grid-cols-3 sm:grid-cols-2  bg-gray-800  p-5 sm:p-4">
    {movieDisplay.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie}  />
    ))}
  </div>
)}

    </div>
  );
};

export default SearchBar;