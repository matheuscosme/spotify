import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './Playlist.modules.css'
import { useState, useEffect } from 'react';

function ListarMusicas({id, nomeDaMusica, nomeDoArtista, idDaPlay}) { 


    function adicionarNaPlaylist(){
        let idDaMusica = id
        console.log(id);
        axios.put(`http://localhost:3001/playlistsDeUsuarios/${idDaPlay}`, {idDaMusica})
        // window.location.reload(false)
    }    

    return(
        <>
        <div className='listagem'>
            <p>{nomeDaMusica} - {nomeDoArtista}  <button class="btn bg-white" 
                                                            type="submit" onClick={adicionarNaPlaylist}>+</button> 
                                                            <br /></p>
        </div>
    </>
    )
}

export default ListarMusicas