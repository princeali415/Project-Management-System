import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiOutlineBarChart />,
        cName: 'nav-text',
    },
    {
        title: 'Team Members',
        path: '/team-members',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text',
    },
    {
        title: 'Tickets',
        path: '/tickets',
        icon: <FaIcons.FaList />,
        cName: 'nav-text',
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <ImIcons.ImFileText2 />,
        cName: 'nav-text',
    },
]