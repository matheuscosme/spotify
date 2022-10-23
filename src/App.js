import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Componentes/Home/Home'
import Faq from'./Componentes/Faq/Faq'
import Menu from'./Componentes/Menu/Menu'
import Cadastro from './Componentes/Cadastro/Cadastro'
import Playlist from './Componentes/Playlist/Playlist'
import React from 'react'
import Login from './Componentes/Login/Login'
import AlterarCadastro from './Componentes/AlterarCadastro/AlterarCadastro'
import ListarMusicas from './Componentes/Playlist/ListarMusicas'
import CriarPlaylist from './Componentes/Playlist/CriarPlaylist'


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/Faq" element={<Faq />}></Route>

        <Route path="/Cadastro" element={<Cadastro />}></Route>

        <Route path="/Playlist/:id" element={<Playlist />}></Route>

        <Route path="/Login" element={<Login />}></Route>

        <Route path="/AlterarCadastro" element={<AlterarCadastro />}></Route>

        <Route path="/CriarPlaylist" element={<CriarPlaylist />}></Route>

        <Route path="/ListarMusicas" element={<ListarMusicas />}></Route>

      </Routes>
    </Router>
    
  )
}

export default App