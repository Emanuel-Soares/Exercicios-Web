import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            {/* Refatorado com sucesso */}
            <NavItem href="/" icon="home" title="Início" />
            <NavItem href="/users" icon="users" title="Usuários" />
        </nav>
    </aside>