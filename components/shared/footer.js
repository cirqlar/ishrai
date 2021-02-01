import Link from "next/link";
import cn from "classnames";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer({ className }) {
  const socialIconProperties = {
    size: "20px",
  };

  return (
    <footer className={cn(className, "page-padding bg-gray-900 text-white")}>
      <div>
        <img src="/logo/ishrai-transparent.png" alt="ISHRAI's logo" />
        <p className="font-bold italic">Improved Sexual Health & Rights Advocacy Initiative</p>
      </div>
      <div>
        <Link href="/">
          <a className={cn("")}>About Us</a>
        </Link>
        <Link href="/">
          <a className={cn("")}>Our Partners</a>
        </Link>
        <Link href="/">
          <a className={cn("")}>Meet The Staff</a>
        </Link>
        <Link href="/">
          <a className={cn("")}>What we do</a>
        </Link>
        <Link href="/">
          <a className={cn("")}>Donations</a>
        </Link>
        <Link href="/">
          <a className={cn("")}>Contact Us</a>
        </Link>
        <Link href="/">
          <a className={cn("")}>Safehouse</a>
        </Link>
        <Link href="/">
          <a className={cn("")}>News/Blog</a>
        </Link>
      </div>
      <div>
        <h1>Find us</h1>
        <p>5 Abiola Fagbola Close, Lagos, Nigeria</p>
        <p>ishraing@gmail.com</p>
        <div className="flex justify-center pt-2 first:p-0 first:ml-4">
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
    </footer>
  );
}
