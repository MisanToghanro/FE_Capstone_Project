import axios from "axios"


const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

const fetchFeatureMovieApi = async () => {

    try{
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbApiKey}`)
        return response.data.results;
    }catch(error){
        throw new Error("No movies featured");
    }
   
    

}
export default fetchFeatureMovieApi;