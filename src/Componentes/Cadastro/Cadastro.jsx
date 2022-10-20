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

    // function salvarCadastro(e){
    //     e.preventDefault()
        
    // }



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
                        <h1 style={{ color: 'green' }}>Inscreva-se grátis e comece a curtir.</h1>
                        <div class="d-grid gap-2 col-sm-6 mx-auto">

                            <button class="btn btn-primary" type="button"> <span><img src="../img/facebook-logo.png"
                                width="30px" alt="" /></span> Inscreva-se com o Facebook</button>
                            <button class="btn btn-light" type="button"> <span><img src="../img/Google-logo.png" width="30px"
                                alt="" /></span> Inscreva-se com o Google</button>
                        </div>
                    </div>

                </div>



                <div class="row">
                    <div class="col-sm p-3">
                        <form action="" onSubmit={cadastrando} >

                            <label htmlFor="email" class="form-label">Qual é o seu e-mail?</label>
                            <input type="email" name='email' class="form-control" required id="email" aria-describedby="emailHelp"
                                placeholder="digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="confirmarEmail" class="form-label">Confirme seu e-mail</label>
                            <input type="email" name='confirmarEmail' placeholder="Insira o e-mail novamente" class="form-control" required
                                id="confirmarEmail" aria-describedby="emailHelp" onChange={(e) => setconfirmarEmail(e.target.value)} />
                            {email != confirmarEmail ? <p>e-mails precisam ser iguais!</p> : <p></p>}

                            <label htmlFor="senha" class="form-label">Crie uma senha</label>
                            <input type="password" placeholder="Crie uma senha." onChange={(e) => setSenha(e.target.value)} 
                            class="form-control" required id="senha" aria-describedby="emailHelp" />

                            <label htmlFor="nome" class="form-label">Como devemos chamar você?</label>
                            <input type="text" placeholder="Insira um nome de perfil" class="form-control" required
                                id="nome" aria-describedby="emailHelp" onChange={(e) => setNome(e.target.value)} />
                            <div id="emailHelp" class="form-text" style={{ color: 'gray' }}>Isso aparece no seu perfil.
                            </div>

                            <label htmlFor="nascimento" class="form-label">Qual a sua data de nascimento?</label>

                            <div class="row ">

                                <div class="col ">

                                    <label htmlFor="dia" class="form-label">Dia</label>
                                    <input type="number" placeholder="DD" class="form-control w-50" required id="dia"
                                        aria-describedby="emailHelp" />
                                </div>

                                <div class="col ">

                                    <label htmlFor="mes" class="form-label">Mês</label>
                                    <select class="form-select w-50 mt-2" id="mes" required aria-label="Default select example">
                                        <option value="0">Mês</option>
                                        <option value="1">janeiro</option>
                                        <option value="2">fevereiro</option>
                                        <option value="3">março</option>
                                        <option value="1">abril</option>
                                        <option value="2">maio</option>
                                        <option value="3">junho</option>
                                        <option value="1">julho</option>
                                        <option value="2">agosto</option>
                                        <option value="3">setembro</option>
                                        <option value="1">outubro </option>
                                        <option value="2">novembro </option>
                                        <option value="3">dezembro</option>
                                    </select>

                                </div>

                                <div class="col">
                                    <label htmlFor="ano" class="form-label">ano</label>
                                    <input type="number" placeholder="AAAA" class="form-control w-50" required id="ano"
                                        aria-describedby="emailHelp" />
                                </div>


                            </div>

                            <div class="mt-3  genero">
                                <label htmlFor="">Qual é o seu gênero?</label>
                                <input type="radio" id="masculino" name="genero" />
                                <label htmlFor="masculino">Masculino</label>

                                <input type="radio" id="feminino" name="genero" />
                                <label htmlFor="feminino">Feminino</label>

                                <input type="radio" id="nao-binario" name="genero" />
                                <label htmlFor="nao-binario">Não binário</label>
                            </div>

                            <div class="caixa">



                                <label htmlFor="marketing-Spotify1">Não quero receber mensagens de marketing do Spotify</label>
                                <input type="checkbox" id="marketing-Spotify1" />


                                <label htmlFor="marketing-Spotify2">Compartilhar meus dados cadastrais com os provedores de conteúdo
                                    do Spotify para fins de marketing.</label>
                                <input type="checkbox" id="marketing-Spotify2" />


                                <label htmlFor="marketing-Spotify3">Eu concordo com os <a
                                    href="https://www.spotify.com/br/legal/end-user-agreement/">Termos e Condições de Uso do
                                    Spotify.</a></label>
                                <input type="checkbox" id="marketing-Spotify3" required />
                            </div>

                            <div class="row text-center mt-3">
                                <div class="col">
                                    <p>Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados
                                        pessoais, leia a <a href="https://www.spotify.com/br/legal/privacy-policy/"> Política de
                                            Privacidade do Spotify.</a></p>

                                    <button class="btn bg-white" type="submit">Inscreva-se</button>

                                    <div id="teste">
                                        {sucesso && <p><Link to="/">Página inicial</Link></p>}
                                    </div>



                                </div>
                            </div>

                        </form>
                    </div>

                </div>


            </div >



        </>
    )
}

export default Cadastro