import React from 'react'

const Card = ({posts}) => {
  return (
    <div className="min-h-screen mt-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl">MERN Miscellaneous</h1>
          <h1 className="text-3xl text-accent italic">Infinite scroll</h1>
        </div>

        <div  >
          {/* Map all posts here */}
          {posts?.map((post) => (
             <div key={post._id} className="card shadow-sm bg-neutral text-accent-content mx-8 md:mx-36 lg:mx-80 mb-28">
<div className="flex my-3">
  
  <div className="self-center font-bold">{post.title}</div>
</div>

<div className="mx-4 my-3" key={post._id}>
  <p>
    <span className="font-bold">{post.title}</span>
    <span className="ml-2 text-sm">{post.description}</span>
  </p>
</div>
</div>


          ))}
        </div>
        {/* {isEnd && <p>End of posts</p>} */}
      </div>
  )
}

export default Card