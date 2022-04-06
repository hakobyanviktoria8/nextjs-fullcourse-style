import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./../styles/Navbar.module.css"
import Image from 'next/image'

function Navbar() {
    const { data: session } = useSession()
    // console.log("Navbar session is a ",session);
    // if (session) {
    //     return (
    //       <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //       </>
    //     )
    //   }
  return (
      <div className={styles.Navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        {!session && 
            <Link href="/api/auth/signin">
                {/* <a onClick={() => signIn()}>   //without any parametr go to github and you submit button to register */}
               {/* with  ('github') parametr automatily sign in and sign out used github sesion key*/}
                <a onClick={() => signIn('github')}>
                    Sign in
                </a>
            </Link>
        }  
        { session && 
        <>
            <Link href="/api/auth/signout">
                <a onClick={() => signOut()}>
                    Sign out
                </a>
            </Link> 
            <div>
                <Image src={session.user.image} width={50} height={50}/>
               <p>{session.user.email}</p> 
               <p>{session.user.name}</p> 
            </div>
        </>
        }
    </div>
  )
}

export default Navbar