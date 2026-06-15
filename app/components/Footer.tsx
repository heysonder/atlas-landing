import Link from "next/link";
import { PineTree } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-links">
        <a href="https://github.com/heysonder/atlas" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="footer-sep">/</span>
        <a href="mailto:contact@cmf.sh">Contact</a>
        <span className="footer-sep">/</span>
        <Link href="/privacy">Privacy policy</Link>
      </nav>
      <p className="footer-tag">
        <PineTree />
        Crafted in Eau Claire
      </p>
    </footer>
  );
}
