import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Playlist() { 

    const {id} = useParams();
    var srcImg = "../img/" + id + ".jpg";
    var musicas = [];

    const [playlists, setPlaylists] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/playlists')
            .then((res) =>setPlaylists(res.data) )
    }, [] )

    console.log(playlists)

    for(let i = 0; i<playlists.length; i++){
        if(playlists[i].id == id){
            var nomeDoArtista = playlists[i].nome;
            musicas = playlists[i].musicas
        }
    }

  
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