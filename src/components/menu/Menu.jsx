"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
    // const status = "unauthenticated"
    // const name = "webs"

    const { data: session, status } = useSession();
    return (
        <ul>
            {/* <li><Link href='/'>Home</Link></li>
            <li><Link href='/blog'>블로그</Link></li>
            <li><Link href='/notice'>게시판</Link></li> */}

            {status === "authenticated" ? (
                <>
                    <li><span><a>{session.user.name}님 반가워요!!</a></span></li>
                    <li><span onClick={signOut}><a>로그아웃</a></span></li>
                </>
            ) : (
                <>
                    <li><Link href='/login'>로그인</Link></li>
                    <li><Link href='/join'>회원가입</Link></li>
                </>

            )}

        </ul>
    )
}
