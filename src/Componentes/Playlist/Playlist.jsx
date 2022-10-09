import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import styles from './Playlist.modules.css'
import { useParams } from 'react-router-dom'
import Player from './Player';
function Playlist() { 

    const {artista} = useParams();
    var srcImg = "../img/" + artista + ".jpg";
    var musicas = [];

    const listaDeArtistas = [
        {cod:"Bob", nome:"Bob Marley",
            musicas: [
                {nome: "Is this Love", endereco: '../musica/bob/bob1.mp3'},
                {nome:"One Love", endereco:'../musica/bob/bob2.mp3'},
                {nome:"Teste", endereco:'../musica/bob/bob3.mp3'}
            ]
        },

        {cod:"Iron", nome:"Iron Maiden",
            musicas: [
                {nome:"The Trooper", endereco:'../musica/iron/iron1.mp3'},
                {nome:"The Trooper", endereco:'../musica/iron/iron1.mp3'}
            ]
        }
    ]

    for(let i = 0; i<listaDeArtistas.length; i++){
        if(listaDeArtistas[i].cod == artista){
            var nomeDoArtista = listaDeArtistas[i].nome;
            musicas = listaDeArtistas[i].musicas
        }
    }

  
    return(
        <>
            <div className='musicas'>
                <div className='player'>
                    <p>{nomeDoArtista}</p>
                <img src={srcImg}/>
                    {musicas.map(musica => <Player nome={musica.nome} endereco={musica.endereco}/>)}
                </div>
            </div>
    </>
    )
}

export default Playlist