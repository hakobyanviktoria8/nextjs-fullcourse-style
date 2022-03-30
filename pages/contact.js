import React from 'react'
import styles from "../styles/Contact.module.scss"

function Contact() {
  return (
    <div>
        <h1 className={styles.title}>Contact page</h1>
        <p className={styles.paragraph}>We recommend creating a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:</p> 
        <span>yarn create next-app</span> 
    </div>
  )
}

export default Contact