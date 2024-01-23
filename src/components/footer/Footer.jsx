import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <header id='footer' role='banner'>
            <div className='left'>
                <h1 className='logo'>
                    <Link href="/"> Jins blog</Link>
                </h1>
            </div>
            <nav className='nav'>
                <p>MOON🌝</p>
            </nav>
            <div className='right'>
                <ul>
                    <li>
                        <Link href="/notice">Notice</Link>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Footer