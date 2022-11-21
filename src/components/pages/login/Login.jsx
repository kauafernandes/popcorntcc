import React from 'react';
import './Login.css';


export const Login = () => {
  return (
    <div>
        <head>
            <title>Login</title>
        </head>

        <body>
            <form>
                <div className="input-group">
                    <div className="email">
                        <label for="email">
                            <input id="email" type="text" name="email" placeholder="Nome de usuário ou email" required/>
                        </label>
                    </div>               

                    <div className="senha">
                        <label for="senha">
                            <input id="senha" type="password" name="senha" placeholder="Senha" required/>
                        </label>
                    </div>
                </div>
            </form>

            <h6 className="esqueceusenha"> <a href="../senha/verificacaoemail.html"> Esqueceu a senha? </a> </h6>

            <div>
                <button className="botaoentrar">ENTRAR</button>
            </div>

            <button type="button" className="ver-senha"> <img src="olho.png" alt="imagem" className="imagem-view"/></button>
        </body>
    </div>
  )
}

export default Login