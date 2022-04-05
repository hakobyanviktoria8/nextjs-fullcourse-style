import React from 'react'
import styles from "../../styles/News.module.css"

function News({data}) {
  return (
    <div className={styles.News}>
        <h1>News</h1>
        <p>{data}</p>
    </div>
  )
}

export default News

export async function getStaticProps(){
    return{
        props:{
            data: "List of news"
        }
    }
}