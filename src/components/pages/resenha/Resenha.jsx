import React from 'react'

export const Resenha = () => {
  return (
    <div>
      <img src="iconresenbranco.png" className="icon_resenha"/>
      <div className="resenha">Resenha</div>

      <div className="areazul">

      <div className="nomefilme">Anne with an "E"</div>
      <div className="fcatalogo">
        <img src="img_anne.png" className="annewith"/>
      </div>

      <div className="estrelas">
        <img src="estrelacheia.png" className="estrela1"/>
        <img src="estrelacheia.png" className="estrela2"/>
        <img src="estrelacheia.png" className="estrela3"/>
        <img src="estrelacheia.png" className="estrela4"/>
        <img src="estrelavazia.png" className="estrela5"/>
      </div> 

      <textarea rows="5" cols="75" maxlength="8000" placeholder="Escrever resenha..." required></textarea>

      <button className="cancelar">CANCELAR</button>
      <button className="salvar">SALVAR</button>
      </div>
    </div>
  )  
}

export default Resenha