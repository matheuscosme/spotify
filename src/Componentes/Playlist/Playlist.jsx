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
        {cod:"Bob", nome:"Bob Marley", id:0, 
            musicas: [
                {nome: "Is this Love", endereco: '../musica/bob1.mp3'},
                {nome:"One Love", endereco:'../musica/bob2.mp3'},
                {nome:"Teste", endereco:'../musica/bob3.mp3'}
            ]
        },

        {cod:"Iron", nome:"Iron Maiden", id:1,
            musicas: [
                {nome:"The Trooper", endereco:'../musica/iron1.mp3'},
                {nome:"The Trooper", endereco:'../musica/iron1.mp3'}
            ]
        }
    ]

    for(let i = 0; i<listaDeArtistas.length; i++){
        if(listaDeArtistas[i].cod == artista){
            var nomeDoArtista = listaDeArtistas[i].nome;
            var idDoArtista = listaDeArtistas[i].id
            musicas = listaDeArtistas[i].musicas
            var nDeMusicas = musicas.length
        }
    }

  
    return(
        <>
            <div className='musicas'>
                <div className='player'>
                    <p>{nomeDoArtista}</p>
                <img src={srcImg}/>
                    {musicas.map(musica => <Player nome={musica.nome} endereco={musica.endereco}/>)}
                    {/* <p>{musicas[0].nome}</p>
                    <ReactAudioPlayer src={musicas[0].endereco}
                        controls />
                    <p>{musicas[1].nome}</p>
                    <ReactAudioPlayer src={musicas[1].endereco}
                        controls /> */}
                </div>
            </div>
    </>
    )
}

export default Playlist