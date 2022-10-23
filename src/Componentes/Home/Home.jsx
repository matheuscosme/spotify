import React, { useState } from 'react';
import Card from '../CardPlaylist/Card';
import CardPrivado from '../CardPlaylist/CardPrivado';
import styles from './Home.modules.css'
import SideBar from '../BarraLateral/SideBar.jsx';
import axios from 'axios';
import { useEffect } from 'react';


function Home() {
    const [playlists, setPlaylists] = useState([]);
    const [playlistsDeUser, setPlaylistsDeUser] = useState([]);
    const [usuario, setUsuario] = useState();
    let playlistsPublicas = [];
    let playlistsPrivadas = [];

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        setUsuario(usuarioLogado);
    }, [])

    useEffect( () => {
        axios.get('http://localhost:3001/playlists')
            .then((res) =>setPlaylists(res.data) )
    }, [] )

    useEffect( () => {
        axios.get('http://localhost:3001/playlistsDeUsuarios')
            .then((res) =>setPlaylistsDeUser(res.data) )
    }, [] )

    for(let i = 0; i<playlists.length; i++){
        playlistsPublicas.push(playlists[i]);
    }

    for(let i = 0; i<playlistsDeUser.length; i++){
        playlistsPrivadas.push(playlistsDeUser[i]);
    }

    return(
<>

    <div className="App">     
        <div className="wrapper">
            <SideBar/>
            {playlistsPublicas.map(playlist => <Card estilo={playlist.estilo} nome={playlist.nome} id={playlist.id}/>)}
            <br />
            <div>
                {usuario && 
                            playlistsPrivadas.map(playlist => <CardPrivado estilo={playlist.estilo} nome={playlist.nome} id={playlist.id}/>)}
            </div>
        </div>


    </div>
</>
    )
    
   
}

export default Home;