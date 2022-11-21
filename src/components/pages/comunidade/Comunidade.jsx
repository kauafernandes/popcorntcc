import React from 'react'
import './comunidade.css';
import Header from '../../header/Header'
import Menu from '../../menu/Menu';

function Comunidade () {

  return (
    <div>
       <Header/>
    <body>
      <Menu/>
      <div className='conteudo'>
    <div className="post1">
      <a href="../perfil/perfil.html"> <img class="foto_usu" src="https://i.imgur.com/ywLhj3f.png" /></a>
      <a href="../perfil/perfil.html"> <h1 className="user_post">@user</h1></a>
      <img className="atl" src='https://i.imgur.com/qN4TI8w.png' />
      <h1 className="alt_text">fez uma nova atualização há 10 minutos</h1>

      <a href="#"><img src="https://i.imgur.com/na2r649.jpg" className="cartaz"/></a>

      <div className="status">
        <img src="https://i.imgur.com/cphliPX.png" className="view" />
        <h3 className="view_txt"><strong>Assistiu: </strong> Brooklyn Nine-Nine</h3>
      </div>

      <div className="avaliacao">
        <h3 className="txt_avaliacao">Minha comédia favotita no momento. Essa mistura de comédia com policial é demais! Não consigo não rir com as falas do Jake e do Boyle, além do Capitão Holt sendo sério é tão engraçado. Muito bom!</h3>
      </div>

      <div>
        <img src="https://i.imgur.com/Tuylq42.png" className="coment" />
        <img src="https://i.imgur.com/lSc4532.png" className="like" />
      </div>
    </div>

    <div className="post2">
      <a href="#"><img src="https://i.imgur.com/ywLhj3f.png" className="foto_usu"/></a>
      <a href="#"><h1 className="user_post">@user</h1></a>
      <img src="https://i.imgur.com/qN4TI8w.png" className="atl" />
      <h1 className="alt_text">fez uma nova atualização há 15 minutos</h1>

      <a href="#"><img src="https://i.imgur.com/qWSV6ix.jpg" className="cartaz"/></a>

      <div className="status">
        <img src="https://i.imgur.com/cphliPX.png" className="view" />
        <h3 className="view_txt"><strong>Está assistindo: </strong>A Cinco Passos de Você</h3>
      </div>

      <div className="avaliacao">
        <h3 className="txt_avaliacao">Filme incrível, clichê? Sim, mas tem uma parte ou outra que sai do padrão do cinema clichê kkk porém, é maravilhoso, ele te mostra que você nunca deve desistir.</h3>
      </div>

      <div>
        <img src="https://i.imgur.com/yFpYtaf.png" className="coment" />
        <img src="https://i.imgur.com/njXL0Rl.png" className="like" />
      </div>

      <div className="resposta">
        <a href="#"><img src="https://i.imgur.com/ywLhj3f.png" className="usu_coment"/></a>
        <a href="#"><h1 className="user_coment">@user</h1></a>
        <h3 className="respt_txt">Um dos filmes mais emocionantes que já assisti, meu favoritooo!</h3>
      </div>
    </div>

    <div className="post3">
      <a href="#"><img src="https://i.imgur.com/ywLhj3f.png" className="foto_usu"/></a>
      <a href="#"><h1 className="user_post">@user</h1></a>
      <img src="atl.png" className="atl" />
      <h1 className="alt_text">fez uma nova atualização há 1 hora</h1>

      <a href="#"><img src="https://i.imgur.com/Oj2pvoN.jpg" className="cartaz"/></a>

      <div className="status">
        <img src="https://i.imgur.com/cphliPX.png" className="view" />
        <h3 className="view_txt"><strong>Assistiu: </strong>Como Eu Era Antes de Você</h3>
      </div>

      <div className="avaliacao">
        <h3 className="txt_avaliacao">SENSACIONAL!!! O filme não teve final previsível, o que me deixou satisfeito, final diferente, não tão feliz mas que faz mostrar a realidade que nem tudo são rosas</h3>
      </div>

      <div>
        <img src="https://i.imgur.com/Tuylq42.png" className="coment" />
        <img src="https://i.imgur.com/lSc4532.png" className="like" />
      </div>
    </div>
    </div>
    </body>
    </div>
  )
}

export default Comunidade