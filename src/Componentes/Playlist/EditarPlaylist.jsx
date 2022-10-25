import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListarMusicas from './ListarMusicas';
function EditarPlaylist() { 


    let lista = [];
    let musicasDaPlay = [];
    let idMusicasDisponiveis = [];
    let musicasDisponiveis = [];
    let todosIds = [];
    let nomeDaPlaylist = [];
    let adicionar = [];
    let removido = [];
    const {id} = useParams();
    const [nomeBusca, setNomeBusca] = useState()
    const [idAdicionar, setIdAdicionar] = useState()
    const [idDeletar, setIdDeletar] = useState()
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
        
        
    
    for (let i =0; i<playlist.length; i++){
        if(playlist[i].id == id){
            nomeDaPlaylist = playlist[i].nome
            for (let j =0;j<playlist[i].musicas.length;j++){
                lista.push(playlist[i].musicas[j].idDaMusica)
            }
        }
    }
    
    
    for (let c = 0; c<todasAsMusicas.length;c++){
        todosIds.push(todasAsMusicas[c].id)
        for (let x = 0; x<lista.length; x++){
            if(todasAsMusicas[c].id == lista[x]){
                musicasDaPlay.push(todasAsMusicas[c])
            }
        }
    }
    
    
    idMusicasDisponiveis = todosIds.filter(i => !lista.includes(i));
    
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
            }
            setNovo(array);
        }
    }
    
    function adicionarNaPlaylist(){
        for(let d=0;d<lista.length;d++){
            adicionar.push({"idDaMusica":lista[d]})
        }
        adicionar.push({"idDaMusica":parseInt(idAdicionar)})
        axios.patch(`http://localhost:3001/playlistsDeUsuarios/${id}`, {musicas:adicionar})
    }

    function deletar(){
        for(let i=0;i<lista.length;i++){
            if(lista[i] != idDeletar){
                removido.push({"idDaMusica":(lista[i])})
            }
        }
        axios.patch(`http://localhost:3001/playlistsDeUsuarios/${id}`, {musicas:removido})
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
                            nomeDoArtista={musica.artista}/>)}
                    <br /><br />
                    <form action="" onSubmit={adicionarNaPlaylist}>
                        <div className='musicas'>
                            <label >ADICIONAR MÚSICAS</label> <br />

                            <label htmlFor="">Músicas Disponíveis</label>
                                {musicasDisponiveis.map(musica => <ListarMusicas id={musica.id} nomeDaMusica={musica.nome} 
                                nomeDoArtista={musica.artista}/>)}

                            <label class="form-label">Id da Música</label>
                            <input name='playlist' class="form-control"
                            onChange={(e) => setIdAdicionar(e.target.value)} value={idAdicionar} />

                            <button class="btn bg-white" type="submit">Adicionar Música</button> <br />
                        </div>
                    </form>

                    <br />

                    <div className='musicas'>
                        <label >REMOVER MÚSICAS</label> <br />

                        <label htmlFor="">Musicas na Playlist</label>
                            {musicasDaPlay.map(musica => <ListarMusicas id={musica.id} nomeDaMusica={musica.nome} 
                            nomeDoArtista={musica.artista} naPlay={true} idDaPlay={id} musicasNaPlay={lista}/>)}

                        <form action='' onSubmit={deletar}>
                        <label class="form-label">Id da Música</label>
                            <input name='playlist' class="form-control"
                            onChange={(e) => setIdDeletar(e.target.value)} value={idDeletar} />

                            <button class="btn bg-white" type="submit">Deletar Música</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
    )
}

export default EditarPlaylist