import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import { Button } from 'bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Player({id, nome, endereco, idDaPlay, user}) { 

    const [musicasNaPlay, setMusicas] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost:3001/playlistsDeUsuarios/${idDaPlay}`)
            .then((res) => {
                const playlist = res.data;
                setMusicas(playlist.musicas);
            })
    }, [] )
    
    function deletar(){
        console.log('entrando na fun deletar');
        console.log(musicasNaPlay);
        let permanecem = []
        for(let i=0;i<musicasNaPlay.length;i++){
            if(musicasNaPlay[i].idDaMusica != id){
                console.log("salvando música");
                permanecem.push({"idDaMusica":(musicasNaPlay[i].idDaMusica)})
            }
        }
        axios.put(`http://localhost:3001/playlistsDeUsuarios/${idDaPlay}`, {musicas:permanecem})
        // window.location.reload(false)
    }

    return(
        <>
        <div>
            <p>{nome}  { user && <button class="btn btn-danger"
                    type="submit" onClick={deletar}>X</button> } </p>
                <ReactAudioPlayer src={endereco}
                    controls />
        </div>

    </>
    )
}

export default Player