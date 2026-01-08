import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <p className='logo'>Sahara</p>

            <div className="links">
                <NavLink to={'/'} style={({ isActive }) => ({
                    opacity: isActive ? 1 : 0.5
                })} >Home</NavLink>
                <NavLink to={'/catalog'} style={({ isActive }) => ({
                    opacity: isActive ? 1 : 0.5
                })} >Catalog</NavLink>
            </div>
        </nav>
    )
}

export default Navbar