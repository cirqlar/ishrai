import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import { MdMenu } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

import styles from "./css/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const socialIconProperties = {
    size: "20px",
  };

  return (
    <header className="first:page-padding first:flex first:justify-between first:items-center">
      <div className="h-20 flex justify-between items-center page-padding first:p-0">
        <div className="flex items-center">
          <img className={styles.logoImage} src="/logo/ishrai-white.jpg" alt="ISHRAI Nigeria Logo" />
          <h1 className="hidden first:inline-block pl-4 text-2xl font-bold text-gray-600">ISHRAI</h1>
        </div>
        <div className="first:hidden">
          <MdMenu size="1.5rem" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
      <div
        className={cn(
          { hidden: !menuOpen },
          "bg-gray-800 text-white page-padding pt-2 pb-4",
          "first:p-0 first:flex first:items-center first:bg-transparent first:text-black"
        )}
      >
        <nav className="second:border-r second:border-black">
          <Link href="/">
            <a className={cn(styles.link_item, styles.link_item_first)}>Home</a>
          </Link>
          <div className="first:inline-block relative group">
            <a href="#" className={cn("hidden first:inline-block", styles.nav_item)}>Who We Are</a>
            <div
              className={cn(
                "first:hidden first:absolute first:group-hover:block first:group-focus:block",
                styles.dropdown
              )}
            >
              <Link href="/">
                <a className={cn(styles.link_item, styles.submenu_link)}>About Us</a>
              </Link>
              <Link href="/">
                <a className={cn(styles.link_item, styles.submenu_link)}>Our Partners</a>
              </Link>
              <Link href="/">
                <a className={cn(styles.link_item, styles.submenu_link)}>Meet The Staff</a>
              </Link>
              <Link href="/">
                <a className={cn(styles.link_item, styles.submenu_link)}>What we do</a>
              </Link>
            </div>
          </div>
          <Link href="/">
            <a className={styles.link_item}>Donations</a>
          </Link>
          <Link href="/">
            <a className={styles.link_item}>Contact Us</a>
          </Link>
          <Link href="/">
            <a className={styles.link_item}>Safehouse</a>
          </Link>
          <Link href="/">
            <a className={styles.link_item}>News/Blog</a>
          </Link>
        </nav>
        <div className="flex justify-center pt-2 first:hidden second:p-0 second:flex second:ml-4">
          <a href="https://www.facebook.com/ishrai.nigeria.7">
            <FaFacebookSquare {...socialIconProperties} className="mr-2" />
          </a>
          <a href="https://www.instagram.com/ishrai_n/" target="_blank">
            <FaInstagramSquare {...socialIconProperties} className="mr-2" />
          </a>
          <a href="https://www.linkedin.com/company/ishraehq" target="_blank">
            <FaLinkedin {...socialIconProperties} />
          </a>
        </div>
      </div>
    </header>
  );
}
