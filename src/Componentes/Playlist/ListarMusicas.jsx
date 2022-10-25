import axios from 'axios'
import React from 'react'
import Styles from './Playlist.modules.css'

function ListarMusicas({id, nomeDaMusica, nomeDoArtista, naPlay, idDaPlay, musicasNaPlay}) { 


    return(
        <>
        <div className='listagem'>
            <p>{id} - {nomeDaMusica} - {nomeDoArtista}</p>
        </div>
    </>
    )
}

export default ListarMusicas