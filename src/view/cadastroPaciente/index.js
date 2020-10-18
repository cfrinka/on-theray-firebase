import React, { useState } from 'react';
import './cadastroPaciente.css'
import firebase from '../../config/firebase'

function CadastroPaciente() {

    const [ name, setName ] = useState()
    const [ lastName, setlastName ] = useState()
    const [ email, setEmail ] = useState()
    const [ dob, setDob ] = useState()
    const [ phone, setPhone ] = useState()
    const [ emergency, setEmergency] = useState()
    const [ password, setPassword ] = useState()
    const [ therapist, setTherapist] = useState()

    const db = firebase.firestore()

let cadastroPaciente = {
    name: name,
    lastName: lastName,
    email: email,
    dob: dob,
    phone: phone,
    emergency: emergency,
    password: password,
    therapist: therapist,
}

function handleSignUp() {

    db.collection('pacientes').add(cadastroPaciente)
}



    return (
        <div className='login-content d-flex align-items-center'>

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">

                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Cadastro de Paciente</h1>

                </div>

                <input onChange={(e) => setName(e.target.value)} type="text"  className="form-control my-2" placeholder="Nome " />
                <input onChange={(e) => setlastName(e.target.value)} type="text"  className="form-control my-2" placeholder="Sobrenome " />
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email " />
                <input onChange={(e) => setDob(e.target.value)} type="date" className="form-control my-2" placeholder="Data de Nascimento " />
                <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control my-2" placeholder="Telefone" />
                <input onChange={(e) => setEmergency(e.target.value)} type="number" className="form-control my-2" placeholder="Telefone de Emergência"/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />
                <input onChange={(e) => setTherapist(e.target.value)} type="email" className="form-control my-2" placeholder="Email do Terapeuta" />




                <button onClick={handleSignUp} className="btn btn-lg btn-block btn-login" type="submit">Cadastrar</button>

                <div className='msg-login text-white text-center my-5'>
                    <span> Cadastro efetuado com sucesso!</span><br />
                    <span> Houve um erro, tente novamente.</span>

                </div>
               
            </form>
        </div>
    )
}

export default CadastroPaciente;

