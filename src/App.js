import './App.css';
import MovieList from './MovieList';
import { useState } from 'react'
import Filter from './Filter';



function App() {
  const [movies, setMovies] = useState(
    [
      { title: "Breaking Bad", description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.", poster: "https://media.senscritique.com/media/000006469472/source_big/Breaking_Bad.jpg", rate: 5 },
      { title: "Better call Saul", description: "The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.", poster: "https://www.cinechronicle.com/wp-content/uploads/2015/05/Better-Call-Saul-affiche.jpg", rate: 4 },
      { title: "Harry Potter", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", poster: "https://fr.web.img3.acsta.net/c_210_280/pictures/18/07/02/17/25/3643090.jpg", rate: 4 },
      { title: "The Godfather", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", poster: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/57/73/18660716.jpg", rate: 4 }
    ]
  );

  const addMovie = (nMovie) => {
    setMovies(movies.concat(nMovie))
  }
  const [keyWord, setKeyWord] = useState("")
  const [keyRate, setKeyRate] = useState(1)
  const search = (word) => {
    setKeyWord(word)
  }


  return (
    <div className="App">
      <Filter keyRate={keyRate} setKeyRate={setKeyRate} search={search} />
      <MovieList movies={movies.filter((movie) =>
        movie.rate >= keyRate && movie.title.toLowerCase().includes(keyWord.toLowerCase().trim()))} addMovie={addMovie} />

    </div>
  );
}

export default App;
