import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListarMusicas from './ListarMusicas';
function EditarPlaylist() { 

    const {id} = useParams();
    const [nomeBusca, setNomeBusca] = useState()
    const [novoArray, setNovo] = useState([]);
    const navigate = useNavigate();

    const [nomeDaPlaylist, setNomeDaPlaylist] = useState();

    useEffect( () => {
        axios.get(`http://localhost:3001/playlistsDeUsuarios/${id}`)
            .then((res) => {
                const playlist = res.data;
                setNomeDaPlaylist(playlist.nome);
            })
    }, [] )


        
        
    function buscar(){
        let _id = id;
        if(nomeBusca != null){
            axios.get(`http://localhost:3001/todasAsMusicas/${id}/${nomeBusca}`)
            .then((res) =>setNovo(res.data) )
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
                            {novoArray.map(musica => <ListarMusicas id={musica._id} nomeDaMusica={musica.nome} 
                            nomeDoArtista={musica.artista} idDaPlay = {id}/>)}
                    <br /><br />

                    <br />
                </div>
            </div>
    </>
    )
}

export default EditarPlaylist