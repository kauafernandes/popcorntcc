import React from 'react'
import './MeuPerfil.css'

export const Meuperfil = () => {
  return (
    <div>     
        <body>
        <div id="cabeçalho">
                <h1 className="User">@user</h1>
            </div>

            <div id="perfilcontainer">
            </div>
            <div className="iconperf">
                <img src="https://i.imgur.com/3xXiU6g.png"/>
            </div>

            <h1 className="nomedeusu">Nome de usuário</h1>
        </body>
</div>
 )
}

export default Meuperfil