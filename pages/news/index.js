import React from 'react'

function News({data}) {
  return (
    <div>
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