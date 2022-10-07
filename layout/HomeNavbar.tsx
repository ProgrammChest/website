import React from 'react'
import Navbar from '../components/Navbar'


export default function HomeNavbar() {
    return (
        <Navbar items={[{
            name: 'Home',
            href: '/'
        },
        {
            name: 'Wiki',
            href: '/wiki'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'About',
            href: '/about'
        }]} />
    )
}