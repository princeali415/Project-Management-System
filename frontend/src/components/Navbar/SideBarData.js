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
        id: 'dashboard-id'
    },
    {
        title: 'Team Members',
        path: '/team-members',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text',
        id: 'team-members-id'
    },
    {
        title: 'Tickets',
        path: '/tickets',
        icon: <FaIcons.FaList />,
        cName: 'nav-text',
        id: 'tickets-id'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <ImIcons.ImFileText2 />,
        cName: 'nav-text',
        id: 'projects-id'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text',
        id: 'logout-id'
    },
]