import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListarMusicas from './ListarMusicas';
function EditarPlaylist() { 


    let idMusicasNaPlay = [];
    let idMusicasDisponiveis = [];
    let musicasDisponiveis = [];
    let todosIds = [];
    let nomeDaPlaylist = [];
    const {id} = useParams();
    const [nomeBusca, setNomeBusca] = useState()
    const [novoArray, setNovo] = useState([]);
    const navigate = useNavigate();


    const [playlist, setPlaylist] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/playlistsDeUsuarios')
            .then((res) =>setPlaylist(res.data) )
    }, [] )

    
    const [todasAsMusicas, setTodas] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/todasAsMusicas')
            .then((res) =>setTodas(res.data) )
        }, [] )
        
        
    //Salvar a lista de ids das músicas da playlist solicitada
    for (let i =0; i<playlist.length; i++){
        if(playlist[i].id == id){
            nomeDaPlaylist = playlist[i].nome
            for (let j =0;j<playlist[i].musicas.length;j++){
                idMusicasNaPlay.push(playlist[i].musicas[j].idDaMusica)
            }
        }
    }
    
    //Pegar todos os IDs de músicas no sistema. Salvar somente os ids de músicas que não estão na playlist
    for (let c = 0; c<todasAsMusicas.length;c++){
        todosIds.push(todasAsMusicas[c].id)
    }
    idMusicasDisponiveis = todosIds.filter(i => !idMusicasNaPlay.includes(i));

    //A partir da lista de IDs, montar lista de objetos com as músicas que não estão na playlist
    for (let a = 0; a<todasAsMusicas.length;a++){
        for(let b = 0; b<idMusicasDisponiveis.length;b++){
            if(todasAsMusicas[a].id == idMusicasDisponiveis[b]){
                musicasDisponiveis.push(todasAsMusicas[a])
            }
        }
    }
        

    function buscar(){
        let array = []
        if(nomeBusca != null){
            for(let l=0;l<musicasDisponiveis.length;l++){
                if(musicasDisponiveis[l].nome.toLowerCase().indexOf(nomeBusca.toLowerCase())>-1){
                    array.push(musicasDisponiveis[l])
                    console.log(novoArray)
                }
                else if(musicasDisponiveis[l].artista.toLowerCase().indexOf(nomeBusca.toLowerCase())>-1){
                    array.push(musicasDisponiveis[l])
                    console.log(novoArray)
                }
            }
            setNovo(array);
        }
    }
    
  
    return(
        <>
            <div class="row">
                <div class="col-sm p-3">
                    <h2>Editar  <Link to = {"/PlaylistDoUser/" + id}> {nomeDaPlaylist} </Link> </h2> 
                    

                        <label class="form-label">Buscar Músicas</label>

                        <input name='buscar' class="form-control"
                        onChange={(e) => setNomeBusca(e.target.value)} value={nomeBusca} />
                        <button onClick={buscar}>Buscar</button>
                            {novoArray.map(musica => <ListarMusicas id={musica.id} nomeDaMusica={musica.nome} 
                            nomeDoArtista={musica.artista} idDaPlay = {id} musicasNaPlay = {idMusicasNaPlay}/>)}
                    <br /><br />

                    <br />
                </div>
            </div>
    </>
    )
}

export default EditarPlaylist