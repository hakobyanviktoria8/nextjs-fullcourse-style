import Link from 'next/link'
import React from 'react'
import {SignIn, SignOut} from 'next-auth/react'
import styles from "./../styles/Navbar.module.css"

function Navbar() {
  return (
      <div className={styles.Navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/api/auth/signin">
            <a onClick={e=> {
                e.preventDefault()
                SignIn()
            }}>
                Sign in
            </a>
        </Link>
        <Link href="/api/auth/signout">
            <a onClick={e=> {
                e.preventDefault()
                SignOut()
            }}>
                Sign out
            </a>
        </Link>
    </div>
  )
}

export default Navbar