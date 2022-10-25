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
    var srcImg = "../img/user/" + id + ".jpg";
    var idMusicas = [];
    var musicas = [];



    const [playlists, setPlaylist] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/playlistsDeUsuarios/')
            .then((res) =>setPlaylist(res.data) )
    }, [] )

    const [todasAsMusicas, setTodas] = useState([]);
    
    useEffect( () => {
        axios.get('http://localhost:3001/todasAsMusicas')
            .then((res) =>setTodas(res.data) )
    }, [] )

    for(let i = 0; i<playlists.length; i++){
        if(playlists[i].id == id){
            var nomeDoArtista = playlists[i].nome;
            for(let j=0; j<playlists[i].musicas.length;j++){
                idMusicas.push(playlists[i].musicas[j].idDaMusica)
            }
            
        }
    }

    for (let c =0; c<todasAsMusicas.length;c++){
        for (let x = 0; x<idMusicas.length; x++){
            if(todasAsMusicas[c].id == idMusicas[x]){
                musicas.push(todasAsMusicas[c])
            }
        }
    }

    
    console.log("id musicas: " + idMusicas)
    console.log("nome: " + nomeDoArtista)
    console.log("objetos musica: " + JSON.stringify(musicas))


    


  
    return(
        <>
            <div className='musicas'>
                <div className='player'>
                    <p>{nomeDoArtista}</p>
                    <Link to = {"/EditarPlaylist/" + id}> Editar Playlist</Link>
                <img src={srcImg}/>
                    {musicas.map(musica => <Player nome={musica.nome} endereco={musica.endereco} />)}
                </div>
            </div>
    </>
    )
}

export default PlaylistDoUser