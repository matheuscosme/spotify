import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListarMusicas from './ListarMusicas';
function EditarPlaylist() { 

    let todasAsMusicas = [];
    let musicasDaPlay = [];
    const {id} = useParams();
    const [nomeDaPlaylist, setNomeDaPlaylist] = useState()
    const [nomeBusca, setNomeBusca] = useState()
    const [musicasParaAdicionar, setMusicaParaAdicionar] = useState()
    const [usuario, setUsuario] = useState();
    const [listaDeMusicas, setLista] = useState([]);
    const [musicasDaPlaylist, setMusicasDaPlay] = useState([]);



    useEffect( () => {
        axios.get('http://localhost:3001/todasAsMusicas')
            .then((res) =>setLista(res.data) )
    }, [] )


    useEffect( () => {
        axios.get(`http://localhost:3001/playlistsDeUsuarios/${id}`)
            .then((res) =>setMusicasDaPlay(res.data) )
    }, [] )


    let lista = musicasDaPlaylist.musicas;
    console.log("musicas: " + JSON.stringify(lista));

    function adicionarNaPlaylist(){
        axios.put(`http://localhost:3001/playlistsDeUsuarios/${id}`,
            {musicas:musicasParaAdicionar})
    }

  
    return(
        <>


            <div class="row">
                <div class="col-sm p-3">
                    <form action="" onSubmit={adicionarNaPlaylist}>

                        <label class="form-label">Nome da Playlist</label>
                        <input name='playlist' class="form-control"
                        onChange={(e) => setNomeDaPlaylist(e.target.value)} value={nomeDaPlaylist} />

                        <label class="form-label">Buscar Músicas</label>
                        <input name='buscar' class="form-control"
                        onChange={(e) => setNomeBusca(e.target.value)} value={nomeBusca} />
                         
                        <div className='musicas'>
                                {todasAsMusicas.map(musica => <ListarMusicas nomeDaMusica={musica.nome}/>)}
                        </div>

                        <button class="btn bg-white" type="submit">Adicionar Músicas</button>

                    </form>
                    </div>
            </div>


    </>
    )
}

export default EditarPlaylist