import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import  Login  from "./components/layout/Login/index"; // component
import Inicio from './pages/inicio/index'; // page
import  ContainerAccount  from './pages/newAccount/index'; // page
import { GlobalStyle } from "./styles/GlobalStyles/GlobalStyle"; // style global
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SeriePages from './pages/seriePages/index';
import MoviesPages from './pages/moviesPages';
import SlugMovies from './pages/slugPage';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Login title='MovieFlix'/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/registro" element={<ContainerAccount title='MovieFlix'/>}/>
          <Route path="/Series" element={<SeriePages/>}/>
          <Route path="/Filmes" element={<MoviesPages/>}/>
          <Route path="/Series/:slug" element={<SlugMovies/>}/>
          <Route path="/Filmes/:slug" element={<SlugMovies/>}/>
        </Routes>
      <GlobalStyle/>
      <ToastContainer />
    </Router>
    </>
  )
}
export default App
