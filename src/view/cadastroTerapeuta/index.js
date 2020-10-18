import React, { useState } from 'react';
import './cadastroTerapeuta.css'
import firebase from '../../config/firebase'

function CadastroTerapeuta() {

    const [ name, setName ] = useState()
    const [ lastName, setlastName ] = useState()
    const [ crp, setCrp ] = useState()
    const [ phone, setPhone ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    const db = firebase.firestore()

let cadastroTerapeuta = {
    name: name,
    lastName: lastName,
    crp: crp,
    phone: phone,
    email: email,
    password: password
}

function handleSignUp() {

    db.collection('terapeutas').add(cadastroTerapeuta)
}



    return (
        <div className='login-content d-flex align-items-center'>

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">

                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Cadastro de Terapeuta</h1>

                </div>

                <input onChange={(e) => setName(e.target.value)} type="text"  className="form-control my-2" placeholder="Nome " />
                <input onChange={(e) => setlastName(e.target.value)} type="text"  className="form-control my-2" placeholder="Sobrenome " />
                <input onChange={(e) => setCrp(e.target.value)} type="number" className="form-control my-2" placeholder="CRP" />
                <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control my-2" placeholder="Telefone" />
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email " />
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />




                <button onClick={handleSignUp} className="btn btn-lg btn-block btn-login" type="submit">Cadastrar</button>

                <div className='msg-login text-white text-center my-5'>
                    <span> Cadastro efetuado com sucesso!</span><br />
                    <span> Houve um erro, tente novamente.</span>

                </div>
               
            </form>
        </div>
    )
}

export default CadastroTerapeuta;

