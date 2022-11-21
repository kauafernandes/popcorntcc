import React from 'react'

export const HistoricoChat = () => {
  return (
    <div>
        <div className="busca">
    <input className="pesquisa" type="text" placeholder="Pesquisar conversa... "  />
    <button className="pesquisabotao" type="submit"> <img id="lupa" src="lupa.png"/> </button>
    </div>

    <div>
      <a href="../chat/chat.html"><img src="iconusuario.png" className="icon_user1"/></a>
      <a href="../chat/chat.html"><h1 className="nome_user1">Nome do usuário 1</h1></a>
      <h1 className="status1">Online</h1>

      <a href="../chat/chat.html"><img src="iconusuario.png" className="icon_user2"/></a>
      <a href="../chat/chat.html"><h1 className="nome_user2">Nome do usuário 2</h1></a>
      <h1 className="status2">Última vez visto: há 2 semanas</h1>

      <a href="../chat/chat.html"><img src="iconusuario.png" className="icon_user3"/></a>
      <a href="../chat/chat.html"><h1 className="nome_user3">Nome do usuário 3</h1></a>
      <h1 className="status3">Online</h1>

      <a href="../chat/chat.html"><img src="iconusuario.png" className="icon_user4"/></a>
      <a href="../chat/chat.html"><h1 className="nome_user4">Nome do usuário 4</h1></a>
      <h1 className="status4">Última vez visto: há 3 horas</h1>

      <a href="../chat/chat.html"><img src="iconusuario.png" className="icon_user5"/></a>
      <a href="../chat/chat.html"><h1 className="nome_user5">Nome do usuário 5</h1></a>
      <h1 className="status5">Última vez visto: há 10 minutos</h1>

      <a href="../chat/chat.html"><img src="iconusuario.png" className="icon_user6"/></a>
      <a href="../chat/chat.html"><h1 className="nome_user6">Nome do usuário 6</h1></a>
      <h1 className="status6">Última vez visto: agora mesmo</h1>
    </div>
    </div>
  )  
}

export default HistoricoChat