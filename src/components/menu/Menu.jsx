"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Menu() {
  // const status = "unauthenticated"
  // const name = "webs"

  const { data: session, status } = useSession();
  return (
    <>
      {/* <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">블로그</Link>
      </li>
      <li>
        <Link href="/notice">게시판</Link>
      </li> */}

      {status === "authenticated" ? (
        <>
          <span className="user">
            <a>{session.user.name}님 반가워요!!</a>
          </span>
          <span onClick={signOut}>
            <a>
              <Image src="/logout.png" alt="" width={40} height={40} />
            </a>
          </span>
        </>
      ) : (
        <>
          <Link href="/login">
            <Image src="/login.png" alt="" width={40} height={40} />
          </Link>
          <Link href="/join">
            <Image src="/join.png" alt="" width={40} height={40} />
          </Link>
        </>
      )}
    </>
  );
}
