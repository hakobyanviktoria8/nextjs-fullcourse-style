import React from 'react'
import {getSession, useSession} from 'next-auth/react'

function Blog({data}) {
  const { data: session } = useSession()
  console.log("Blog get Session ",data, session);
  return (
    <div>
        <h1>Blog Page</h1>
        <h2>Welcome {session?.user.name}!</h2>
         <p>You can see {data}</p>
    </div>
  )
}

export default Blog

// Server-side Authentication
export async function getServerSideProps(context){
  const sesion = await getSession(context)
  return{
    props: {
      data: sesion? "List of 100 blogs": "List of free blogs"
    }
  }
}