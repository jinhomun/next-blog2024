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

            </nav>
            <div className='right'>
                <img src="/moon.png" alt="" />
            </div>
        </header >
    )
}

export default Footer