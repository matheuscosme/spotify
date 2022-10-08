import React from 'react'

const SideBar = () => {
  return (
    <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Buscar</a></li>
                    <li><a href="#">Sua Biblioteca</a></li>
                    <p></p>
                    <li><a href="#">Nova Playlist</a></li>
                    <li><a href="#">Músicas curtidas</a></li>
                </ul>
    </nav>
  )
}

export default SideBar