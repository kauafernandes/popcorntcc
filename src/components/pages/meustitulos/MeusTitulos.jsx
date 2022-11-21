import React from 'react';
import './MeusTitulos.css';
import Menu from '../../menu/Menu';
import Header from '../../header/Header'

function Meustitulos () {

  return (
    <div>
      <Header/>
      <Menu/>
      
      <div className='conteudo'>
    <div className='meustitulos'>
    <h1> Meus títulos </h1>
      <div className="divbotoesetiqueta">
        <button className="botaoetiqueta"> Todos </button>
        <button className="botaoetiqueta"> Assistido </button>
        <button className="botaoetiqueta"> Assistindo </button>
        <button className="botaoetiqueta"> Quero assistir </button>
        <button className="botaoetiqueta"> Reassistindo </button>
      </div>
      <div className='divtitulos'>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
      </div>
      <div className='divtitulos'>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
      </div>
      <div className='divtitulos'>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
      </div>
      <div className='divtitulos'>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
        <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Meustitulos