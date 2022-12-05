import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './Playlist.modules.css'
import { useState, useEffect } from 'react';

function ListarMusicas({id, nomeDaMusica, nomeDoArtista, idDaPlay}) { 

    const [musicasNaPlay, setMusicas] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost:3001/playlistsDeUsuarios/${idDaPlay}`)
            .then((res) => {
                const playlist = res.data;
                setMusicas(playlist.musicas);
            })
    }, [] )


    function adicionarNaPlaylist(){
        let adicionar = []
        for(let i=0;i<musicasNaPlay.length;i++){
            adicionar.push({"idDaMusica":musicasNaPlay[i].idDaMusica})
        }
        adicionar.push({"idDaMusica": id})
        console.log(id);
        console.log(adicionar);
        axios.put(`http://localhost:3001/playlistsDeUsuarios/${idDaPlay}`, {musicas:adicionar})
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