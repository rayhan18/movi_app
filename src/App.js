
import './App.css';
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Homepage/Home';
import MovieList from './Components/moviList/MoviList';
import MoviDetails from './Components/moviDetails/MoviDetails';

//https://www.youtube.com/watch?v=KH-pw1cv34E
function App() {
  return (
    <div className="App">
      <Header/>
       
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="movie/:id" element={<MoviDetails/>}></Route>
              <Route path="movies/:type" element={<MovieList/>}></Route>
              <Route path="/" element={<h1>error page</h1>}></Route>
          </Routes>
       
    </div>
  );
}

export default App;
