import React from 'react'

export const Seguidores = () => {
  return (
    <div>
      <a href="../perfil/perfil.html"><img src="flexa.png" className="flexavoltar"/></a>
        
    <div className="caixa">
      <h1 className="seguidores">500 Seguidores</h1>
      <a href="../seguindo/seguindo.html" className="seguindo">800 Seguindo</a>
    </div>

    <div className="ftusuario"> 
      <img src="iconusuario.png" className="usu1"/>
      <img src="iconusuario.png" className="usu2"/>
      <img src="iconusuario.png" className="usu3"/>
      <img src="iconusuario.png" className="usu4"/>
      <img src="iconusuario.png" className="usu5"/>
      <img src="iconusuario.png" className="usu6"/>
    </div>

    <div className="barraseguidores"></div>
      <div className="nome1">Nome do usuário 1</div>
      <div className="nome2">Nome do usuário 2</div>
      <div className="nome3">Nome do usuário 3</div>
      <div className="nome4">Nome do usuário 4</div>
      <div className="nome5">Nome do usuário 5</div>
      <div className="nome6">Nome do usuário 6</div>

      <div className="nomeP1">usuário</div>
      <div className="nomeP2">usuário</div>
      <div className="nomeP3">usuário</div>
      <div className="nomeP4">usuário</div>
      <div className="nomeP5">usuário</div>
      <div className="nomeP6">usuário</div>

      <button className="botaov1">Remover</button>
      <button className="botaov2">Remover</button>
      <button className="botaov3">Remover</button>
      <button className="botaov4">Remover</button>
      <button className="botaov5">Remover</button>
      <button className="botaov6">Remover</button>
    </div>
  )  
}

export default Seguidores