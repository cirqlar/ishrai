import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { MdMenu } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaCaretDown } from "react-icons/fa";

import styles from "./css/header.module.css";

export default function Header({ className }) {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isWhoWeAreDropdownOpen, setIsWWADO] = useState(false);
  const [isMoreDropdownOpen, setIsMDO] = useState(false);
  const [isPostDropdownOpen, setIsPDO] = useState(false);

  const whoWeAre = useRef();
  const more = useRef();
  const posts = useRef();

  const dropdowns = [
    [whoWeAre, setIsWWADO],
    [more, setIsMDO],
    [posts, setIsPDO],
  ];

  useEffect(() => {
    const closeDropdowns = ({ target }) => {
      for (const dropdown of dropdowns) {
        if (!dropdown[0].current.contains(target)) {
          dropdown[1](false);
        }
      }
    };
    document.addEventListener("click", closeDropdowns);

    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
    setIsMDO(false);
    setIsWWADO(false);
    setIsPDO(false);
  }, [router.asPath]);

  const socialIconProperties = {
    size: "20px",
  };

  return (
    <header className={cn("first:page-padding first:flex first:justify-between first:items-center", className)}>
      <div className="h-20 flex justify-between items-center page-padding first:p-0">
        <div className="flex items-center">
          <img className={styles.logoImage} src="/logo/ishrai-white.jpg" alt="ISHRAI Nigeria Logo" />
          <h1 className="hidden second:inline-block pl-4 text-2xl font-bold text-gray-600">ISHRAI</h1>
        </div>
        <div className="first:hidden">
          <MdMenu size="1.5rem" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
        </div>
      </div>
      <div
        className={cn(
          { hidden: !isMobileNavOpen },
          "grey-background text-white page-padding pt-2 pb-4",
          "first:p-0 first:flex first:items-center first:bg-transparent first:text-black"
        )}
      >
        <nav className="first:border-r first:border-black">
          <Link href="/">
            <a className={cn(styles.link_item, styles.link_item_first)}>Home</a>
          </Link>
          <div ref={whoWeAre} className="first:inline-block relative">
            <a
              href="#"
              className={cn("hidden first:inline-block", styles.nav_item)}
              onClick={(e) => {
                e.preventDefault();
                setIsWWADO(!isWhoWeAreDropdownOpen);
              }}
            >
              Who We Are
              <FaCaretDown className="inline-block" />
            </a>
            <div className={cn({ "first:hidden": !isWhoWeAreDropdownOpen }, "first:absolute z-50", styles.dropdown)}>
              <Link href="/about">
                <a className={cn(styles.link_item, styles.submenu_link)}>About Us</a>
              </Link>
              <Link href="/partners">
                <a className={cn(styles.link_item, styles.submenu_link)}>Our Partners</a>
              </Link>
              <Link href="/team">
                <a className={cn(styles.link_item, styles.submenu_link)}>Meet The Team</a>
              </Link>
              <Link href="/whatwedo">
                <a className={cn(styles.link_item, styles.submenu_link)}>What we do</a>
              </Link>
            </div>
          </div>
          <div ref={more} className="first:inline-block relative">
            <a
              href="#"
              className={cn("hidden first:inline-block second:hidden", styles.nav_item)}
              onClick={(e) => {
                e.preventDefault();
                setIsMDO(!isMoreDropdownOpen);
              }}
            >
              More
              <FaCaretDown className="inline-block" />
            </a>
            <div
              className={cn(
                { "first:hidden": !isMoreDropdownOpen },
                "first:absolute z-50",
                styles.dropdown,
                "second:inline-block second:relative",
                styles.expandedDropdown
              )}
            >
              <Link href="/under_construction">
                <a className={cn(styles.link_item, styles.submenu_link)}>Donations</a>
              </Link>
              <Link href="/contact">
                <a className={cn(styles.link_item, styles.submenu_link)}>Contact Us</a>
              </Link>
              <Link href="/under_construction">
                <a className={cn(styles.link_item, styles.submenu_link)}>Safehouse</a>
              </Link>
              <div ref={posts} className="second:inline-block relative">
                <a
                  href="#"
                  className={cn("hidden second:inline-block", styles.nav_item)}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPDO(!isPostDropdownOpen);
                  }}
                >
                  Blog/Gallery
                  <FaCaretDown className="inline-block" />
                </a>
                <div
                  className={cn(
                    { "second:hidden": !isPostDropdownOpen },
                    "second:absolute z-50",
                    styles.dropdownSecond,
                  )}
                >
                  <Link href="/posts">
                    <a className={cn(styles.link_item, styles.submenu_link)}>News/Blog</a>
                  </Link>
                  <Link href="/gallery">
                    <a className={cn(styles.link_item, styles.submenu_link)}>Gallery</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex justify-center pt-2 first:p-0 first:ml-4">
          <a href="https://www.facebook.com/ishrai.nigeria.7" target="_blank">
            <FaFacebookSquare {...socialIconProperties} className="mr-2" />
          </a>
          <a href="https://www.instagram.com/ishrai_n/" target="_blank">
            <FaInstagramSquare {...socialIconProperties} className="mr-2" />
          </a>
          <a href="https://www.linkedin.com/company/ishrai/" target="_blank">
            <FaLinkedin {...socialIconProperties} />
          </a>
        </div>
      </div>
    </header>
  );
}
