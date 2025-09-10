"use client";
import Link from "next/link";
import { useState } from "react";
// import styles from "../styles/header.module.scsss";
import styles from "../styles/header.module.scss"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Better.com</Link>
        </div>

        {/* Hamburger button for mobile */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.active : ""}></span>
          <span className={isOpen ? styles.active : ""}></span>
          <span className={isOpen ? styles.active : ""}></span>
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/mortgage-calculator" onClick={() => setIsOpen(false)}>Calculator</Link>
          <Link href="/start" onClick={() => setIsOpen(false)}>Start</Link>
        </nav>
      </div>
    </header>
  );
}
