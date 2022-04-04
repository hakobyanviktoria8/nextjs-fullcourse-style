import React from 'react'
import Image from 'next/image'

function Animals() {
  return (
    <div>
        <h1>Animals</h1>
        {["1","2","3","4","5"].map((x,i)=>
            <div key={i}>
                <Image src={`/${x}.jpg`} alt="img" width={200} height={200}/>
            </div>)}
    </div>
  )
}

export default Animals