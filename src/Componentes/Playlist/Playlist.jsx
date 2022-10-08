// import './Faq.modules.css'
// import song from '../music/bob.mp3'

import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import SideBar from '../BarraLateral/SideBar'
import { useParams } from 'react-router-dom'
function Playlist() { 
   
    const {artista} = useParams();

    return(
        <>
            <div className='musicas'>
                <div className='player'>
                    <p>{artista}</p>
                <img src="img/is this love.jpg"/>
                    <p>Is This Love</p>
                    <ReactAudioPlayer src={'musica/bob.mp3'}
                        controls />
                    <p>One Love</p>
                    <ReactAudioPlayer src={'musica/bob2.mp3'}
                        controls />
                </div>
            </div>
    </>
    )
}

export default Playlist