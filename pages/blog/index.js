import React from 'react'
import {getSession} from 'next-auth/react'

function Blog({data}) {
  console.log(getSession);
  return (
    <div>
        <h1>Blog Page</h1>
        <p>{data}</p>
    </div>
  )
}

export default Blog

export async function getServerSideProps(context){
  const sesion = await getSession(context)
  return{
    props: {
      data: sesion? "List of 100 blogs": "List of free blogs"
    }
  }
}