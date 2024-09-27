import { useState ,useEffect} from "react";
import {useParams} from "react-router-dom"
import MovieDetailsApi from "../ApiComponent/movieDetailApi"; //api for movie details
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


const GetMovieDetails =  () => {
const {imdbID} = useParams();
const [details , setDetails] = useState({});
const [error , setError] = useState("");


const movieDetails = async() => {

    try{
        const response = await MovieDetailsApi(imdbID);// ids for each movie is set to moviedetailsapi
        setDetails(response); //setDetails gets more info of a movie
    }catch(error){
        setError("movie details not found"); // display message if details are not found
    }}

    useEffect(() =>{movieDetails()}, [imdbID]) //movie details funtion is called when imdbID changes

    
    return (
        <div className="container max-w-sm shadow-lg shadow-blue-500 p-4  rounded-md md:ml-8">

            <h1 className="text-blue-500 font-bold text-2xl underline">Movie details:</h1>
            
            {details && ( // if details is true display the div will be displayed
                <div className="mb-4 ">
                     <img src={details.Poster} alt={details.Title} className="w-full mb-2" />
                     <h3 className="text-blue-500 font-bold ">About Movie:</h3>
                    <p className="bg-blue-500 p-3 text-white font-bold rounded-md mb-2">{details.Plot}</p>
                    <p className="bg-blue-500 p-3 text-white font-bold rounded-md mb-2">Cast: {details.Actors}</p>
                    <div className="bg-blue-500 p-3 text-white font-bold rounded-md "> 
                    <p>Rated: {details.Rated}</p>
                    <p>Rating: {details.imdbRating}</p>
                    <p>Run Time:{details.Runtime}</p>
                    <p>Genre: {details.Genre}</p>
                    </div>
                </div>
            ) }
               {error && <p className="text-red-500 font-medium">{error}</p>}{/*else display error*/}

             <Link to={"/"} element={<SearchBar/>} className="text-blue-500 font-bold hover:underline rounded-sm bg-white p-2 ">go back</Link>

        </div>
    );
    



}
export default GetMovieDetails;






