import {useState} from 'react';
import { movieList } from './components/movieList';
import { search } from './components/search';
import {movieData} from "./Data";
import {about} from "./components/about";

function App() {
  const [movies, setMovie] = useState(movieData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const add=(newMovie)=>{setMovie(movie=>([...movie,newMovie]))};

  return (
    <div className="App">   
      <search setSearchRating={setSearchRating} searchRating={searchRating} setSearchTitle={setSearchTitle} />
      <movieList searchRating={searchRating} searchTitle={searchTitle} movies={movies} />
      <about add={add}/>
    </div>
  );
}

export default App;
