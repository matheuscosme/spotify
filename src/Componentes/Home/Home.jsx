import React, { useState } from 'react';
import Card from '../CardPlaylist/Card';
import styles from './Home.modules.css'
import SideBar from '../BarraLateral/SideBar.jsx';
import axios from 'axios';
import { useEffect } from 'react';


function Home() {
    const [playlists, setPlaylists] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/playlists')
            .then((res) =>setPlaylists(res.data) )
    }, [] )

    return(
<>

    <div className="App">     
        <div className="wrapper">
            <SideBar/>
            {playlists.map(playlist => <Card estilo={playlist.estilo} banda={playlist.banda} capa={playlist.capa} id={playlist.id}/>)}
        </div>

    </div>
</>
    )
    
   
}

export default Home;