import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Menu.modules.css'

function Menu() {

    const [usuario, setUsuario] = useState();

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        setUsuario(usuarioLogado);
    }, [])

//useEffect

  return(

      <div>
          <header>   
              <nav className="nav_bar">
                <Link to="/" className="navbar-brand">
                    <img id="logo" src="../img/Spotify2.png" alt="spotify"/>
                </Link>
                {usuario && <p>Olá, {usuario.nome}</p>}
                  
                <ul className="nav-list">
                    {!usuario && 
                        <li><Link to = "/Cadastro" className='a_menu'>Cadastrar</Link></li>}
                    {usuario &&        
                        <li><Link to = "/AlterarCadastro" className='a_menu'>Editar</Link></li>}
                    <li><Link to = "/Faq" className='a_menu'>FAQ</Link></li>
                    {usuario &&        
                    <li><Link to = "/CriarPlaylist" className='a_menu'>Criar Playlist</Link></li>}
                    {!usuario && 
                        <li><Link to = "/Login" className='a_menu'>Login</Link></li>}
                    {usuario && 
                        <li><Link to = "/Login" className='a_menu'>Logout</Link></li>}

                </ul>
              </nav>
          </header>

      </div>


  );
}

export default Menu;
