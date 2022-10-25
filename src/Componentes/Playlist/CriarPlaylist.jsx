import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useNavigate, useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListarMusicas from './ListarMusicas';
function CriarPlaylist() { 

    let musicas = [];
    const [nomeDaPlaylist, setNomeDaPlaylist] = useState()
    const [usuario, setUsuario] = useState()
    const navigate = useNavigate();
    let listaVazia = [];

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        setUsuario(usuarioLogado);
    }, [])


    // const [listaDeMusicas, setLista] = useState([]);

    // useEffect( () => {
    //     axios.get('http://localhost:3001/todasAsMusicas')
    //         .then((res) =>setLista(res.data) )
    // }, [] )


    // musicas = listaDeMusicas;

    function salvarPlaylist(){
        axios.post('http://localhost:3001/playlistsDeUsuarios',{idDoUsuario:usuario.id,nome:nomeDaPlaylist, estilo:usuario.nome, musicas:listaVazia})
            .then(navigate('/'))
    }

  
    return(
        <>


            <div class="row">
                <div class="col-sm p-3">
                    <form action="" onSubmit={salvarPlaylist}>

                        <label class="form-label">Nome da Playlist</label>
                        <input name='playlist' class="form-control"
                        onChange={(e) => setNomeDaPlaylist(e.target.value)} value={nomeDaPlaylist} />

                        <button class="btn bg-white" type="submit">Criar Playlist</button>

                    </form>
                    </div>
            </div>


    </>
    )
}

export default CriarPlaylist