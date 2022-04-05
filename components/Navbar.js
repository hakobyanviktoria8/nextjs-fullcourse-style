import Link from 'next/link'
import React from 'react'
import styles from "./../styles/Navbar.module.css"

function Navbar() {
  return (
      <div className={styles.Navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/sign-up">Sign up</Link>
        <Link href="/sign-in">Sign in</Link>
    </div>
  )
}

export default Navbar