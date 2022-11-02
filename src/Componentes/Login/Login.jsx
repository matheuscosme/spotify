import ReactDOM from 'react-dom';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'
import './Login.modules.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function Login() {

    const [senha, setSenha] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    localStorage.clear();

    
    function handleSubmit(e) {

        e.preventDefault()

        axios.get(`http://localhost:3001/users?email=${email}`)
            .then((res)=> {
                const usuario = res.data[0];

                if(usuario.senha !== senha){
                    return
                }
                
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                navigate('/');
                window.location.reload(false)
            })
        

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
                

                <div class="row">
                    <div class="col-sm p-3">
                        <form action="" onSubmit={handleSubmit} >

                            <label htmlFor="email" class="form-label">Email</label>
                            <input type="email" name='email' value={email} class="form-control" required id="email" aria-describedby="emailHelp"
                                placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="senha" class="form-label">Senha</label>
                            <input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}
                            class="form-control" required id="senha" aria-describedby="emailHelp" />

                            <button class="btn bg-white mt-3" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login