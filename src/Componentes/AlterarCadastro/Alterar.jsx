import ReactDOM from 'react-dom';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'
import './Cadastro.modules.css'
function Cadastro() {

    const [nome, setNome] = useState()
    const [confirmarEmail, setconfirmarEmail] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [sucesso, setSucesso] = useState()


    function cadastrando(e) {

        e.preventDefault()

        ReactDOM.render(<>{email === confirmarEmail ? (<p>Cadastrado com sucesso!</p>) : (<p>E-mails precisam ser iguais!</p>)}</>, document.getElementById('teste'));
        if (email == confirmarEmail) {
            setSucesso(true)
        } else {
            setSucesso(false)
        }

        const user = {nome,email,senha}

        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        e.target.reset();

    }



    return (
        <>

            <div class="container-sm border border-dark b-shadow w-50 mt-5 p-3 mb-5 bg-black ">

                <div class="row text-center ">
                    <div class="col-sm">
                        <a href="../HomePage/home page.html">
                            <img src="../login/Spotify.png" width="240px" alt="" />
                        </a>
                    </div>
                </div>
                <div class="row text-center ">
                    <div class="col-sm p-3 ">
                        <h1 style={{ color: 'green' }}>ALTERAR DADOS</h1>
                    </div>

                </div>



                <div class="row">
                    <div class="col-sm p-3">
                        <form action="" onSubmit={cadastrando} >

                            <label htmlFor="email" class="form-label">Alterar E-mail</label>
                            <input type="email" name='email' class="form-control" required id="email" aria-describedby="emailHelp"
                                placeholder="digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="confirmarEmail" class="form-label">Confirme novo e-mail</label>
                            <input type="email" name='confirmarEmail' placeholder="Insira o e-mail novamente" class="form-control" required
                                id="confirmarEmail" aria-describedby="emailHelp" onChange={(e) => setconfirmarEmail(e.target.value)} />
                            {email != confirmarEmail ? <p>e-mails precisam ser iguais!</p> : <p></p>}

                            <label htmlFor="senha" class="form-label">Alterar senha</label>
                            <input type="password" placeholder="Crie uma senha." onChange={(e) => setSenha(e.target.value)} 
                            class="form-control" required id="senha" aria-describedby="emailHelp" />

                            <label htmlFor="nome" class="form-label">Alterar nome</label>
                            <input type="text" placeholder="Insira um nome de perfil" class="form-control" required
                                id="nome" aria-describedby="emailHelp" onChange={(e) => setNome(e.target.value)} />
                            <div id="emailHelp" class="form-text" style={{ color: 'gray' }}>Isso aparece no seu perfil.
                            </div>


                            <button class="btn bg-white" type="submit">Alterar Cadastro</button>


                        </form>
                    </div>

                </div>


            </div >



        </>
    )
}

export default Cadastro