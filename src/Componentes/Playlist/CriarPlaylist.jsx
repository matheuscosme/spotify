import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListarMusicas from './ListarMusicas';
function CriarPlaylist() { 

    let musicas = [];
    const [nomeDaPlaylist, setNomeDaPlaylist] = useState()
    const [nomeBusca, setNomeBusca] = useState()


    const [listaDeMusicas, setLista] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/todasAsMusicas')
            .then((res) =>setLista(res.data) )
    }, [] )


    musicas = listaDeMusicas;


  
    return(
        <>


            <div class="row">
                <div class="col-sm p-3">
                    <form action="" >

                        <label class="form-label">Nome da Playlist</label>
                        <input name='playlist' class="form-control"
                        onChange={(e) => setNomeDaPlaylist(e.target.value)} value={nomeDaPlaylist} />

                        <label class="form-label">Buscar Músicas</label>
                        <input name='buscar' class="form-control"
                        onChange={(e) => setNomeBusca(e.target.value)} value={nomeBusca} />

                        <div className='musicas'>
                                {musicas.map(musica => <ListarMusicas nomeDaMusica={musica.nome}/>)}
                        </div>

                        <button class="btn bg-white" type="submit">Criar Playlist</button>

                    </form>
                    </div>
            </div>


    </>
    )
}

export default CriarPlaylist