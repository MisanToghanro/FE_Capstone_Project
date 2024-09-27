import { useState ,useEffect } from "react"
import fetchFeatureMovieApi from "../ApiComponent/featureMoviesApi" // api for featured movies 

const FeatureMovies = () => {

    const[featureMovies , setFeatureMovies] = useState([]);
    const [dropDown , setDropDown] = useState(null);
    const[error , setError] = useState("")

 
    const getMovies = async () => {
        try{
            const moviesFetched = await fetchFeatureMovieApi(); 
            setFeatureMovies(moviesFetched)//set Featured movies to moviesfetched from the api
        }catch(error){
            setError("no movies") // if no movies are found display message
        }
  
  }

  useEffect(() => {getMovies()} ,[]);

  const openDropDown = (id) => {setDropDown(dropDown === id ? null : id) }// drop down menu function.

    return(
        <div className="mt-10 p-5">
            <h2 className="text-red-500 font-bold mb-5 text-center"> Popular Movies:</h2>

            {error && <p className="text-red-500 front-bold text-center">{error}</p>}

         <div className="m-5 mb-  grid gap-6  md:grid-cols-3 sm:grid-cols-2 ">
         {featureMovies.map(movie => ( 
            <div key={movie.id} className="max-w-sm shadow-lg shadow-red-400 p-4   rounded-lg  bg-gray-800 "> 
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-2"/>
            <h3 className="text-red-500 font-bold   mb-2 ">Title:{movie.title}</h3>
            <p className="text-red-500 mb-2"><strong>Release Date:</strong> {movie.release_date}</p>

            <button onClick={() => openDropDown(movie.id)} className="text-red-500">
                 {dropDown === movie.id ? "Hide details" : "Show details"}
            </button>

            {dropDown === movie.id && ( <div>
                <p className="text-white font-bold bg-red-500 p-4 mb-2 rounded-md">About:{movie.overview}</p>
                <p className="text-white font-bold bg-red-500 p-4 mb-2 rounded-md">Rating:{movie.vote_average}</p>
            </div>)}

            </div>
        ))}
         </div>
  
        </div>
    )
}
export default FeatureMovies;