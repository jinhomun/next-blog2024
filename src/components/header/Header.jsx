import Link from 'next/link'
import React from 'react'
import Theme from '../theme/Theme'
import Menu from '../menu/Menu'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <div className='left'>
                <h1 className='logo'>
                    <Link href="/"> Jins blog</Link>
                </h1>
                <Theme />
            </div>
            <nav className='nav'>

                <Link href='/'><img src="/home.png" alt="" /></Link>
                <Link href='/blog'><img src="/note.png" alt="" /></Link>
                <Link href='/notice'><img src="/home.png" alt="" /></Link>

            </nav>
            <div className='right'>
                <Menu />
            </div>
        </header >
    )
}

export default Header