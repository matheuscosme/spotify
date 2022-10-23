import React from 'react'
import Styles from './Playlist.modules.css'

function ListarMusicas({nomeDaMusica}) { 

  
    return(
        <>
        <div className='listagem'>
            <input type="checkbox">{nomeDaMusica}</input>
        </div>
    </>
    )
}

export default ListarMusicas