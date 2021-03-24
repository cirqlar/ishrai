import Link from "next/link";
import cn from "classnames";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import styles from "./css/footer.module.css";

export default function Footer({ className }) {
  const socialIconProperties = {
    size: "30px",
  };

  return (
    <footer
      className={cn(
        className,
        "page-padding pt-4 pb-8 grey-background text-white second:flex second:pt-12 second:pb-16"
      )}
    >
      <div
        className={cn("flex flex-col items-center text-center second:items-start second:text-left", styles.footerLogo)}
      >
        <img className="w-20" src="/logo/ishrai-transparent.png" alt="ISHRAI's logo" />
        <p className={cn("font-bold italic text-lg pt-2", styles.logoTitle)}>
          Improved Sexual Health & Rights Advocacy Initiative
        </p>
      </div>
      <div
        className={cn(
          "pt-4 flex justify-center second:block second:text-sm",
          styles["emulated-flex-gap"],
          styles.footerLinks
        )}
      >
        <Link href="/about">
          <a className={cn("")}>About Us</a>
        </Link>
        <Link href="/partners">
          <a className={cn("")}>Our Partners</a>
        </Link>
        <Link href="/under_construction">
          <a className={cn("")}>Meet The Staff</a>
        </Link>
        <Link href="/whatwedo">
          <a className={cn("")}>What we do</a>
        </Link>
        <Link href="/under_construction">
          <a className={cn("")}>Donations</a>
        </Link>
        <Link href="/contact">
          <a className={cn("")}>Contact Us</a>
        </Link>
        <Link href="/under_construction">
          <a className={cn("")}>Safehouse</a>
        </Link>
        <Link href="/under_construction">
          <a className={cn("")}>News/Blog</a>
        </Link>
      </div>
      <div className={cn("pt-4 flex flex-col justify-center text-center", styles.footerContact)}>
        <h1 className="font-bold italic text-2xl">Find us</h1>
        <p className="font-bold pt-2 text-sm">
          <a href="mailto:ishrainigeria@gmail.com">ishrainigeria@gmail.com</a>
        </p>
        <div className="flex justify-center pt-4">
          <a aria-label="Facebook" href="https://www.facebook.com/ishrai.nigeria.7" target="_blank">
            <FaFacebookSquare {...socialIconProperties} className="mr-2" />
          </a>
          <a aria-label="Instagram" href="https://www.instagram.com/ishrai_n/" target="_blank">
            <FaInstagramSquare {...socialIconProperties} className="mr-2" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/company/ishraehq" target="_blank">
            <FaLinkedin {...socialIconProperties} />
          </a>
        </div>
      </div>
    </footer>
  );
}
