import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import './AlterarCadastro.modules.css'
import axios from 'axios';

function AlterarCadastro() {

    const [_id, setId] = useState()
    const [nome, setNome] = useState()
    const [confirmarEmail, setconfirmarEmail] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [sucesso, setSucesso] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
        console.log(usuario);
        setNome(usuario.nome);
        setEmail(usuario.email);
        setSenha(usuario.senha);
        setId(usuario._id);
    }, [])

    function cadastrando(e) {

        e.preventDefault()


        const user = {nome,email,senha}
        const userLocal = {nome,email,senha, _id}

        axios.put(`http://localhost:3001/users/${_id}`, user)
            .then( (res) => {
                localStorage.setItem('usuarioLogado', JSON.stringify(userLocal));
                navigate('/');
            })


        e.target.reset();

    }



    return (
        <>

            <div class="container-sm border border-dark b-shadow w-50 mt-5 p-3 mb-5 bg-black ">
                <div class="row">
                    <div class="col-sm p-3">
                        <form action="" onSubmit={cadastrando} >

                            <label htmlFor="email" class="form-label">Qual é o seu e-mail?</label>
                            <input type="email" name='email' class="form-control" required id="email" aria-describedby="emailHelp"
                                placeholder="digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />

                            <label htmlFor="confirmarEmail" class="form-label">Confirme seu e-mail</label>
                            <input type="email" name='confirmarEmail' placeholder="Insira o e-mail novamente" class="form-control" required
                                id="confirmarEmail" aria-describedby="emailHelp" onChange={(e) => setconfirmarEmail(e.target.value)} />
                            {email != confirmarEmail ? <p>e-mails precisam ser iguais!</p> : <p></p>}

                            <label htmlFor="senha" class="form-label">Crie uma senha</label>
                            <input type="password" placeholder="Crie uma senha." value={senha} onChange={(e) => setSenha(e.target.value)} 
                            class="form-control" required id="senha" aria-describedby="emailHelp" />

                            <label htmlFor="nome" class="form-label">Como devemos chamar você?</label>
                            <input type="text" placeholder="Insira um nome de perfil" value={nome} class="form-control" required
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

                            <button class="btn bg-white" type="submit">Alterar Cadastro</button>

                        </form>
                    </div>

                </div>


            </div >



        </>
    )
}

export default AlterarCadastro