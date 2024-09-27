import axios from "axios";

const apiKey = "5d8a0c90";

const MovieDetailsApi = async (imdbID) => {
  try {
    // Make a request to get details of a movie
    const detailResponse = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`);
    return detailResponse.data; // Return the data directly
  } catch (error) {
    throw new Error("Movie details not found");
  }
};

export default MovieDetailsApi;
