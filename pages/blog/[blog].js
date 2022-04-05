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
        {/* here didn't working process.env */}
        <p>{`My user id is a ${process.env.NEXT_PUBLIC_ID}`}</p>
    </div>
  )
}

export default Blog

export async function getServerSideProps(){
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log(`Conneccting to database with userName ${user} and password ${password}`);
    return {
        props: {
            title: "Article title",
            description:"Article description",
        }
    }
}