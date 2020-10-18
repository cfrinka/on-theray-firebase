import React from 'react';
import './login.css'

function Login() {
    return (
        <div className='login-content d-flex align-items-center'>

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">

                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Faça Login</h1>

                </div>


                <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email " />




                <input type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />




                <button className="btn btn-lg btn-block btn-login" type="submit">Logar</button>

                <div className='msg-login text-white text-center my-5'>
                    <span> Login efetuado com sucesso!</span><br />
                    <span> Verifique os dados de login</span>

                </div>





                <div className='opcoes-login mt-5'>
                    <a href='#' className='mx-2' >Recuperar Senha</a> |
                            <a href='#' className='mx-2'>Fazer Cadastro</a>
                </div>

            </form>
        </div>
    )
}

export default Login;

