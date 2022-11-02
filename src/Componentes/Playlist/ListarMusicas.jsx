import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './Playlist.modules.css'

function ListarMusicas({id, nomeDaMusica, nomeDoArtista, idDaPlay, musicasNaPlay}) { 

    function adicionarNaPlaylist(){
        let adicionar = []
        for(let i=0;i<musicasNaPlay.length;i++){
            adicionar.push({"idDaMusica":musicasNaPlay[i]})
        }
        adicionar.push({"idDaMusica":parseInt(id)})
        axios.patch(`http://localhost:3001/playlistsDeUsuarios/${idDaPlay}`, {musicas:adicionar})
        window.location.reload(false)
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