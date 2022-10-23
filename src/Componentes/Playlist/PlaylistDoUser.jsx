import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
import axios from 'axios';
import { useState, useEffect } from 'react';
function PlaylistDoUser() { 

    const {id} = useParams();
    const [usuario, setUsuario] = useState();
    var srcImg = "../img/" + id + ".jpg";
    var musicas = [];
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        setUsuario(usuarioLogado);
    }, [])

    useEffect( () => {
        axios.get('http://localhost:3001/playlistsDeUsuarios')
            .then((res) =>setPlaylists(res.data) )
    }, [] )


    for(let i = 0; i<playlists.length; i++){
        if(playlists[i].idDoUsuario == usuario.id && playlists[i].id == id){
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

export default PlaylistDoUser