import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";

export const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineMessage/>,
        cName: 'nav-text'
    },
    {
        title: 'Properties',
        path: '/properties',
        icon: <GiIcons.GiFamilyHouse />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },
]