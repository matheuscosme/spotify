import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import { Button } from 'bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Player({id, nome, endereco, idDaPlay, user}) { 
    
    function deletar(){
        let idDaMusica = id
        axios.put(`http://localhost:3001/playlistsDeUsuarios/delete/${idDaPlay}`, {idDaMusica})
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