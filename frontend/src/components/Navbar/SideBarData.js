import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import BugReportIcon from '@material-ui/icons/BugReport';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardIcon />,
        cName: 'nav-text',
        id: 'dashboard-id'
    },
    // {
    //     title: 'Team Members',
    //     path: '/team-members',
    //     icon: <GroupIcon />,
    //     cName: 'nav-text',
    //     id: 'team-members-id'
    // },
    {
        title: 'Tickets',
        path: '/tickets',
        icon: <BugReportIcon />,
        cName: 'nav-text',
        id: 'tickets-id'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <ListIcon />,
        cName: 'nav-text',
        id: 'projects-id'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <ExitToAppIcon />,
        cName: 'nav-text',
        id: 'logout-id'
    },
]