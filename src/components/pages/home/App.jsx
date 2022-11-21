import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Ranking from '../ranking/Ranking';
import Meuperfil from '../meuperfil/MeuPerfil';
import Minhasavaliacoes from '../minhasavaliacoes/MinhasAvaliacoes';
import Home from './Home';
import Comunidade from '../comunidade/Comunidade';
import MeusTitulos from '../meustitulos/MeusTitulos';
import Chat from '../chat/Chat';
import Login from '../login/Login';
import Search from '../search/Search';
import Movie from '../infofilme/Movie';

function App() {
  return(
  <Router>
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/comunidade" element={<Comunidade/>} />
      <Route path="/meustitulos" element={<MeusTitulos/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/meuperfil" element={<Meuperfil/>} />
      <Route path="/minhasavaliacoes" element={<Minhasavaliacoes/>} />
      <Route path="/ranking" element={<Ranking/>} />
      <Route path="movie/:id" element={<Movie/>} />
      <Route path="search" element={<Search />} />

    </Routes>
</Router>
  )
}

export default App