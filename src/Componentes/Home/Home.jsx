import React from 'react';
import '../Menu/Menu.jsx';
import Card from '../CardPlaylist/Card';
// import Playlist from '../Playlist/Playlist.jsx';
import { Link } from 'react-router-dom';
import styles from './Home.modules.css'
import SideBar from '../BarraLateral/SideBar.jsx';
import Playlist from '../Playlist/Playlist.jsx';



function Home() {
    const playlists = [
        {estilo:"Metal", banda:"Iron Maiden", capa:"img/Fear_of_the_dark.jpg", link:"Iron"},
        {estilo:"Reggae", banda:"Bob Marley", capa:"img/is this love.jpg", link:"Bob"},
        {estilo:"Pop", banda:"Beyoncé", capa:"img/Beyonce.jpg", link:"Bey"}
    ]
    return(
<>

    <div className="App">     
        <div className="wrapper">
            <SideBar/>
            {playlists.map(playlist => <Card estilo={playlist.estilo} banda={playlist.banda} capa={playlist.capa} link={playlist.link}/>)}
        </div>

    </div>
</>
    )
    
   
}

export default Home;