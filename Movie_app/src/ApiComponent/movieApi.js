import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY;


const movieApi =  async (searchQuery) => {

    try { 
        //first request will fetch a list of  movies and display: poster, name, date
        const response =  await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);

        if (response.data.Response === "True"){
          return  response.data.Search;
        }else{
            throw new Error ("movie not found")
        }

    } 
    
    catch(error){
            throw new Error("An error occurred while fetching movies");}
}

export default movieApi;