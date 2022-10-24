import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListarMusicas from './ListarMusicas';
function EditarPlaylist() { 


    let lista = [];
    let musicasDaPlay = [];
    let idMusicasDisponiveis = [];
    let musicasDisponiveis = [];
    let todosIds = [];
    let nomeDaPlaylist = [];
    let playlistObject = [];
    const {id} = useParams();
    const [nomeBusca, setNomeBusca] = useState()
    const [idAdicionar, setIdAdicionar] = useState()


    const [playlist, setPlaylist] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/playlistsDeUsuarios')
            .then((res) =>setPlaylist(res.data) )
    }, [] )

    
    const [todasAsMusicas, setTodas] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/todasAsMusicas')
            .then((res) =>setTodas(res.data) )
    }, [] )


    
    for (let i =0; i<playlist.length; i++){
        if(playlist[i].id == id){
            nomeDaPlaylist = playlist[i].nome
            playlistObject = playlist[i]
            for (let j =0;j<playlist[i].musicas.length;j++){
                lista.push(playlist[i].musicas[j].idDaMusica)
            }
        }
    }
 

    for (let c = 0; c<todasAsMusicas.length;c++){
        todosIds.push(todasAsMusicas[c].id)
        for (let x = 0; x<lista.length; x++){
            if(todasAsMusicas[c].id == lista[x]){
                musicasDaPlay.push(todasAsMusicas[c])
            }
        }
    }

    idMusicasDisponiveis = todosIds.filter(i => !lista.includes(i));


    for (let a = 0; a<todasAsMusicas.length;a++){
        for(let b = 0; b<idMusicasDisponiveis.length;b++){
            if(todasAsMusicas[a].id == idMusicasDisponiveis[b]){
                musicasDisponiveis.push(todasAsMusicas[a])
            }
        }
    }


    

    function adicionarNaPlaylist(){
        let algo = [{"idDaMusica":1},{"idDaMusica":2},{"idDaMusica":idAdicionar}]
        axios.patch(`http://localhost:3001/playlistsDeUsuarios/${id}`, {musicas:algo})
            .then((res) =>console.log(res.data))
    }

  
    return(
        <>


            <div class="row">
                <div class="col-sm p-3">
                    <h2>Editar {nomeDaPlaylist}</h2>
                    <form action="" onSubmit={adicionarNaPlaylist}>

                        <label class="form-label">Buscar Músicas</label>
                        <input name='buscar' class="form-control"
                        onChange={(e) => setNomeBusca(e.target.value)} value={nomeBusca} />
                         
                        <div className='musicas'>
                            <label htmlFor="">Músicas Disponíveis</label>
                                {musicasDisponiveis.map(musica => <ListarMusicas id={musica.id} nomeDaMusica={musica.nome} nomeDoArtista={musica.artista}/>)}
                        </div>

                        <label class="form-label">Id da Música</label>
                        <input name='playlist' class="form-control"
                        onChange={(e) => setIdAdicionar(e.target.value)} value={idAdicionar} />

                        <button class="btn bg-white" type="submit">Adicionar Música</button>

                        <div className='musicas'>
                            <label htmlFor="">Musicas na Playlist</label>
                                {musicasDaPlay.map(musica => <ListarMusicas id={musica.id} nomeDaMusica={musica.nome} nomeDoArtista={musica.artista}/>)}
                        </div>

                    </form>
                    </div>
            </div>


    </>
    )
}

export default EditarPlaylist