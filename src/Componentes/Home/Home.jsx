import React from 'react';
import Card from '../CardPlaylist/Card';
import styles from './Home.modules.css'
import SideBar from '../BarraLateral/SideBar.jsx';




function Home() {
    const playlists = [
        {estilo:"Metal", banda:"Iron Maiden", capa:"img/iron.jpg", link:"Iron"},
        {estilo:"Reggae", banda:"Bob Marley", capa:"img/bob.jpg", link:"Bob"},
        {estilo:"Pop", banda:"Beyoncé", capa:"img/bey.jpg", link:"Bey"}
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