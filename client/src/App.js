import './App.css';
import Homepage from "./components/Homepage";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllVideogames, getAllGenres, getPlatforms } from "./redux/actions";
import Detail from "./components/Detail";
import Create from "./components/Create";
import About from './components/About';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVideogames())
      .then(() => dispatch(getAllGenres()))
      .then(() => dispatch(getPlatforms()));
  }, [dispatch]);
  
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/home" component={Home} />
      <Route path="/videogames/:id" component={Detail} />
      <Route path="/create" component={Create} />
      <Route path="/about" component={About} />
    </div>
    </BrowserRouter>
  );
}

export default App;