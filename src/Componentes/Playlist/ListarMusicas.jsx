import React from 'react'
import Styles from './Playlist.modules.css'

function ListarMusicas({nomeDaMusica}) { 

  
    return(
        <>
        <div className='listagem'>
            <p>{nomeDaMusica}</p>
        </div>
    </>
    )
}

export default ListarMusicas