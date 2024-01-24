import Link from "next/link";
import React from "react";
import Theme from "../theme/Theme";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="left">
        <h1 className="logo">
          <Link href="/"> Jins blog</Link>
        </h1>

        <Theme />

        <Link href="/">
          <img className="home" src="/home.png" alt="" />
        </Link>
        <Link href="/blog">
          <img className="blog" src="/blog.png" alt="" />
        </Link>
        <Link href="/notice">
          <img className="notice" src="/notice.png" alt="" />
        </Link>
      </div>
      <nav className="nav">

      </nav>
      <div className="right">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
