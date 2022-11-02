import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import { Button } from 'bootstrap'
import axios from 'axios'
function Player({id, nome, endereco, musicasNaPlay, idDaPlay, user}) { 


    function deletar(){
        let permanecem = []
        for(let i=0;i<musicasNaPlay.length;i++){
            if(musicasNaPlay[i] != id){
                permanecem.push({"idDaMusica":(musicasNaPlay[i])})
            }
        }
        axios.patch(`http://localhost:3001/playlistsDeUsuarios/${idDaPlay}`, {musicas:permanecem})
        window.location.reload(false)
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