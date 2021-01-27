import Link from 'next/link'

export default function Header() {
  return (
    <header className="h-20 flex justify-between items-center">
      <div>
        <h1>ISHRAI</h1>
      </div>
      <div>
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