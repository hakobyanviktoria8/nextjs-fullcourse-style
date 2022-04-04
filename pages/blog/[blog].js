import Head from 'next/head'
import React from 'react'

function Blog({title, description}) {
  return (
    <div>
        <Head>
            {/* creat dinamic SEO part */}
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
        <h1>Blog</h1>
    </div>
  )
}

export default Blog

export async function getServerSideProps(){
    return {
        props: {
            title: "Article title",
            description:"Article description",
        }
    }
}