import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
function PlaylistDoUser() { 

    const {id} = useParams();
    var srcImg = "../img/user/" + 1 + ".jpg";
    const [nomeDoArtista, setArtista] = useState();
    const [musicas, setMusicas] = useState([]);
    const [musicasId, setMusicasId] = useState([]);


    useEffect( () => {
        axios.get(`http://localhost:3001/playlistsDeUsuarios/${id}`)
            .then((res) =>{
                const playlist = res.data;
                setArtista(playlist.nome);
                setMusicasId(playlist.musicas);                
                axios.get(`http://localhost:3001/todasAsMusicas`)
                .then((res) =>{
                    const todasAsMusicas = res.data;
                    var musicasAux = [];
                    for (let i=0; i< playlist.musicas.length; i++){
                        for (let j= 0; j< todasAsMusicas.length; j++){
                            if(playlist.musicas[i].idDaMusica === todasAsMusicas[j]._id){
                                musicasAux.push(todasAsMusicas[j]);
                            }
                        }
                    }
                    setMusicas(musicasAux);
                })
            })
        }, [] )
        

  
    return(
        <>
            <div className='musicas'>
                <div className='player'>
                    <p>{nomeDoArtista}</p>
                    <Link to = {"/EditarPlaylist/" + id}> Adicionar Músicas</Link>
                <img src={srcImg}/>
                    {musicas.map(musica => <Player id = {musica._id} nome={musica.nome} endereco={musica.endereco}
                                                    idDaPlay = {id} user={true}/>)}
                </div>
            </div>
    </>
    )
}

export default PlaylistDoUser