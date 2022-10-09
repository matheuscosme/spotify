import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
function Player({nome, endereco}) { 

  
    return(
        <>
        <div>
            <p>{nome}</p>
                <ReactAudioPlayer src={endereco}
                    controls />
        </div>

    </>
    )
}

export default Player