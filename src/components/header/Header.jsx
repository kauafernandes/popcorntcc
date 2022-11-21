import React from 'react'
import './Header.css';
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav>
    <div className="Cabecalho">
    <Link to="/"> <img className='Pipoca' src="https://i.imgur.com/e8D7Fxr.png"/> </Link>
    <h1 className="Popcorntime">POPCORN TIME</h1>

       <div className='Busca'>
        <form onSubmit={handleSubmit}> 
        <input className='Pesquisa' 
           type="text" 
           placeholder="Pesquisar... " 
           onChange={(e) => setSearch(e.target.value)} 
           value={search}
           />
           <button className='Pesquisabotao' type="submit"> <img id='lupa' src='https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png'/> </button>
           </form>
       </div>

       <div>
       <Link to="/login"><button className='Entrar'> Entrar</button></Link>
       <button className='Cadastrar'>Cadastrar-se</button>
       </div>
   </div>
   </nav>
   
  )
}

export default Header


