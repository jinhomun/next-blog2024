"use client";

import Link from "next/link";
import React from "react";
import Theme from "../theme/Theme";
import Menu from "../menu/Menu";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: status } = useSession();
  console.log("status:", status);

  return (
    <header id="header" role="banner">
      <div className="left">
        <h1 className="logo">
          <Link href="/"> Jins blog</Link>
        </h1>

        <Theme />
        {/* <ul>
          <li>
            <Link href="/">Main</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/notice">Notice</Link>
          </li>
        </ul> */}
      </div>
      <nav className="nav">
        <>
          {status === null ? (
            <ul>
              <li>
                <Link href="/">Main</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/notice">Notice</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link href="/">Main</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/notice">Notice</Link>
              </li>
              <li>
                <Link href="/blogWrite">B.Write</Link>
              </li>
              <li>
                <Link href="/noticeWrite">N.write</Link>
              </li>
            </ul>
          )}
        </>
      </nav>

      <div className="right">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
