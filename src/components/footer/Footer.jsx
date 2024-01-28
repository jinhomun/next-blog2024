import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ theme }) => {
  return (
    <header id="footer" role="banner">
      <div className="left">
        <h1 className="logo">
          <Link href="/"> Jins blog</Link>
        </h1>
      </div>
      <nav className="nav"></nav>
      <div className="right">
        {theme === "dark" ? (
          <Image src="/moon-right.png" alt="" width={40} height={40} />
        ) : (
          <Image src="/moon.png" alt="" width={40} height={40} />
        )}
      </div>
    </header>
  );
};

export default Footer;
