import { useState } from 'react';
import Link from 'next/link'
import cn from 'classnames';
import { MdMenu } from 'react-icons/md'

import styles from './css/header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="page-padding sm:flex sm:justify-between sm:items-center">
      <div className="h-20 flex justify-between items-center">
        <div>
          <img className={styles.logoImage} src="/logo/ishrai-white.jpg" alt="ISHRAI Nigeria Logo" />
          <h1 className="hidden sm:inline-block">ISHRAI</h1>
        </div>
        <div className="sm:hidden">
          <MdMenu size='1.5rem' onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
      <div className={cn({ 'hidden': !menuOpen }, "sm:block")}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <div>
            <p>Who We Are</p>
            <div>
              <Link href="/">
                <a>About Us</a>
              </Link>
              <Link href="/">
                <a>Our Partners</a>
              </Link>
              <Link href="/">
                <a>Meet The Staff</a>
              </Link>
              <Link href="/">
                <a>What we do</a>
              </Link>
            </div>
          </div>
          <Link href="/">
            <a>Donations</a>
          </Link>
          <Link href="/">
            <a>Contact Us</a>
          </Link>
          <Link href="/">
            <a>Safehouse</a>
          </Link>
          <Link href="/">
            <a>News/Blog</a>
          </Link>
        </nav>
        <div></div>
      </div>
    </header>
  );
}