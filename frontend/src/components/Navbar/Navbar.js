import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import { SidebarData } from './SideBarData'

import './Navbar.css'

import { IconContext } from 'react-icons'


function Navbar() {

    const [sidebar, setSideBar] = useState(false)

    const toggleSideBar = () => {
        setSideBar(!sidebar)
    }

    return (
    <>
        <IconContext.Provider value={{color: '#42526E'}}>
        <div className='navbar'>
            <Link to='#' classname='menu-bars'>
                <FaIcons.FaBars  onClick={toggleSideBar} id={'bar'}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
            <ul className='nav-menu-items' onClick={toggleSideBar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <IoIcons.IoIosArrowBack onClick={toggleSideBar} id={'arrow-close'} />
                    </Link>
                </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName} id={item.id}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
            
            </ul>
        </nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar
