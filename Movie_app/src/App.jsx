import GetMovieDetails from "./components/MovieDetails"
import SearchBar from "./components/SearchBar"
import { Routes , Route } from "react-router-dom"
import MovieCard from "./components/MovieCard"
import Footer from "./components/Footer"
import FeatureMovies from "./components/FeatureMovies"

function App() {
 
  

  return (
    <div className="bg-gray-800  w-full min-h-screen ">
    <h1 className="font-bold text-center  p-4 text-5xl text-blue-500 "> MovieQuest</h1>
    <Routes>
      <Route path="/" element={ <SearchBar/>}/>
      <Route path= "/:imdbID" element={<GetMovieDetails/>} />
      <Route path="moviecard" element={<MovieCard/>}/>
    </Routes>
    <FeatureMovies/>
     <Footer/>
    </div>
  )
}

export default App
