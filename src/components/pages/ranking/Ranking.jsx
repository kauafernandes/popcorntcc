import React from 'react'
import './Ranking.css';
import Header from '../../header/Header'
import Menu from '../../menu/Menu';

export const Ranking = () => {
  return (
    <div>
      <Header/>
      
      <Menu/>
      
      <div>
        <h1 className="ranking">Ranking</h1>
        <h3 className="interrogacao">?</h3>
      </div>
  
      <div>
        <h1 className="primeirolugar">1</h1>
        <h1 className="segundolugar">2</h1>
        <h1 className="terceirolugar">3</h1>
      </div>

      <div>
        <a href="../perfil/perfil.html"><img src="https://i.imgur.com/FVj2MKo.png" className="icon1"/></a>
        <a href="../perfil/perfil.html" className="link_nome"><h1 className="nome_user1">nome do usuário</h1></a>
        <div className="fundo_level1"> <h3 className="level1">Lv 50</h3> </div>
      
        <a href="../perfil/perfil.html"><img src="https://i.imgur.com/FVj2MKo.png" className="icon2"/></a>
        <a href="../perfil/perfil.html" className="link_nome"><h1 className="nome_user2">nome do usuário</h1></a>
        <div className="fundo_level2"> <h3 className="level2">Lv 48</h3> </div>
      
        <a href="../perfil/perfil.html"><img src="https://i.imgur.com/FVj2MKo.png" className="icon3"/></a>
        <a href="../perfil/perfil.html" className="link_nome"><h1 className="nome_user3">nome do usuário</h1></a>
        <div className="fundo_level3"> <h3 className="level3">Lv 44</h3> </div>
      </div>

      <div>
        <div className="lvl1"> <h3 className="num1">Lv 50</h3> </div>
        <a href="../perfil/perfil.html"><img src="https://i.imgur.com/FVj2MKo.png" className="icone1"/></a>
        <a href="../perfil/perfil.html" className="link_nome"><h1 className="name_user1">nome do usuário</h1></a>

        <div className="lvl2"> <h3 className="num2">Lv 48</h3> </div>
        <a href="../perfil/perfil.html"><img src="https://i.imgur.com/FVj2MKo.png" className="icone2"/></a>
        <a href="../perfil/perfil.html" className="link_nome"><h1 className="name_user2">nome do usuário</h1></a>

        <div className="lvl3"> <h3 className="num3">Lv 44</h3> </div>
        <a href="../perfil/perfil.html"><img src="https://i.imgur.com/FVj2MKo.png" className="icone3"/></a>
        <a href="../perfil/perfil.html" className="link_nome"><h1 className="name_user3">nome do usuário</h1></a>

        <div className="lvl4"> <h3 className="num4">Lv 36</h3> </div>
        <a href="../perfil/perfil.html"><img src="https://i.imgur.com/FVj2MKo.png" className="icone4"/></a>
        <a href="../perfil/perfil.html" className="link_nome"><h1 className="name_user4">nome do usuário</h1></a>
      </div>

    </div>
  )  
}

export default Ranking