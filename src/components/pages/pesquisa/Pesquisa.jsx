import React from 'react'

export const Pesquisa = () => {
  return (
    <div>
      <div className="resul">Resultados Obtidos para "Anne with an "E""</div>

    <div className="areazul">

    <div className="nomefilme">Anne with an "E"</div>
    <div className="fcatalogo">
        <img src="img_anne.png" className="annewith"/>
    </div>

    <div className="dados">Drama, Família ‧ Série ‧ 3 Temporadas</div>
    <div className="estrelas">
        <img src="estrelacheia.png" className="estrela1"/>
        <img src="estrelacheia.png" className="estrela2"/>
        <img src="estrelacheia.png" className="estrela3"/>
        <img src="estrelacheia.png" className="estrela4"/>
        <img src="estrelavazia.png" className="estrela5"/>
    </div> 

    <div className="decricao">O mundo de Green Gables que Anne tanto adora se expande com novas pessoas e emocionantes histórias de amor, perdas e amadurecimento.</div>
    <div className="add">Adicione na sua lista</div>

    <button className="assistido"> Assistido </button>
    <button className="assistindo">Assistindo</button>
    <button className="queroassistir">Quero Assistir</button>
    <button className="reassistindo">Reassistindo</button>

    <div>
        <img src="iconfav_cheio.png" className="iconedosfavoritos"/>
        <h1 className="favorito">Favorito</h1>
    </div>
    <div> 
        <a href="../resenha/tela_resenha.html"><img src="icon_resenvazio.png" className="iconedaresenha"/></a>
        <a href="../resenha/tela_resenha.html"><h1 className="resenha">Resenha</h1></a>
    </div>

    </div>
    </div>
  )  
}

export default Pesquisa