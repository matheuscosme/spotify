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
        console.log(usuario);
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

    if (usuario){
        for(let i = 0; i<playlistsDeUser.length; i++){
            if(playlistsDeUser[i].idDoUsuario == usuario._id){
                playlistsPrivadas.push(playlistsDeUser[i]);
            }
    }
    }




    return(
<>

        <div className='screen'>
            <div className='side'><SideBar/></div>
            <div className='wrapper'><p>PLAYLISTS PÚBLICAS</p>
                <br /></div>
            <div className="wrapper">
                {playlistsPublicas.map(playlist => <Card estilo={playlist.estilo} nome={playlist.nome} id={playlist._id} img ={playlist.img}/>)}          
            </div>
            <div className='wrapper'>
                {usuario && <p>PLAYLISTS DE {usuario.nome}</p>}
                    <br />
            </div>
            <div className='wrapper'>
                {usuario && 
                        playlistsPrivadas.map(playlist => <CardPrivado estilo={playlist.estilo} nome={playlist.nome} id={playlist._id}/>)}  
            </div>
        </div>
        


</>
    )
    
   
}

export default Home;