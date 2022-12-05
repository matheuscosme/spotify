import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Playlist() { 

    const {id} = useParams();
    const [musicas, setMusicas] = useState([]);
    const [nomeDoArtista, setArtista] = useState();
    const [srcImg, setImg] = useState();

    useEffect( () => {
        axios.get(`http://localhost:3001/playlists/${id}`)
            .then((res) => {
                const playlist = res.data;
                setArtista(playlist.nome);
                setMusicas(playlist.musicas);
                setImg(playlist.img);
            })
        }, [] )
        
        
  
    return(
        <>
            <div className='musicas'>
                <div className='player'>
                    <p>{nomeDoArtista}</p>
                <img src={srcImg}/>
                    {musicas.map(musica => <Player nome={musica.nome} endereco={musica.endereco}/>)}
                </div>
            </div>
    </>
    )
}

export default Playlist