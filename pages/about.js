import React from 'react'
import styles from "../styles/About.module.css"

function About() {
  return (
    <div className={styles.About}>
        <h1 className={styles.title}>About page</h1>
        <button type="button" className="btn btn-primary">Primary</button>
    </div>
  )
}

export default About